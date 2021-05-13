import React, {useState, useEffect} from "react";
import axios from "axios";

import Form from "./components/Form";
import List from "./components/List";
import Section from "./components/Section";

const appTitle = "To Do App";

// const list = [
//     { id: 1, title: "Task #1", completed: false},
//     { id: 2, title: "Task #2", completed: false},
//     { id: 3, title: "Task #3", completed: false}
// ];

const App = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const { data } = await axios.get("http://localhost:4000/todos");
            console.log(data);
            setTodoList(data);
        }
        fetchData();
    }, []);

    const addTodo = (item) => {
        setTodoList(oldList => [...oldList, item]); // spread operator
    }

    const removeTodo = (id) => {
        setTodoList(oldList => oldList.filter((item) => item.id !== id))
    }

    return(
        <div className="ui container center aligned">
            <Section>
                <h1>{appTitle}</h1>
            </Section>
            <Section>
                <Form addTodo={addTodo} />
            </Section>
            <Section>
                <List removeTodo={removeTodo} list={todoList} />
            </Section>
        </div>
    );
}

export default App;
