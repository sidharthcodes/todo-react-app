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

// our backend server
const baseUrl = "http://localhost:4000";

const App = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const { data } = await axios.get(`${baseUrl}/todos`);
            console.log(data);
            setTodoList(data);
        }
        fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await axios.post(`${baseUrl}/todos`, item);
        setTodoList(oldList => [...oldList, data]); // spread operator
    }

    const removeTodo = async (id) => {
        await axios.delete(`${baseUrl}/todos/${id}`);
        setTodoList(oldList => oldList.filter((item) => item._id !== id))
    }

    const editTodo = async (id, item) => {
        await axios.put(`${baseUrl}/todos/${id}`, item);
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
                <List
                    editTodo={editTodo}
                    removeTodo={removeTodo}
                    list={todoList}
                />
            </Section>
        </div>
    );
}

export default App;
