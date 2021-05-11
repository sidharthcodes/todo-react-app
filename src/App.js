import React, {useState} from "react";

import Form from "./components/Form";
import List from "./components/List";
import Section from "./components/Section";

const appTitle = "To Do App";

const list = [
    {title: "Task #1", completed: false},
    {title: "Task #2", completed: false},
    {title: "Task #3", completed: false}
];


const App = () => {
    const [todoList, setTodoList] = useState(list);

    const addTodo = (item) => {
        setTodoList(oldList => [...oldList, item]); // spread operator
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
                <List list={todoList} />
            </Section>
        </div>
    );
}

export default App;
