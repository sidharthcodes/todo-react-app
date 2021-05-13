import React from "react";

import Todo from "./Todo"

const List = ({ list, removeTodo, editTodo }) => {
    const renderedList = list.map(
        (item) => (
            <Todo
                title={item.title}
                completed={item.completed}
                editTodo={(updatedItem) => editTodo(item._id, updatedItem)}
                removeTodo={(e) => removeTodo(item._id)}

                key={item.title}
            />
        )
    );
    return(
        <div className="ui container">
            <div className="ui grid center aligned">
                {renderedList}
            </div>
        </div>
    );
}

export default List;