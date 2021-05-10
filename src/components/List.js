import React from "react";

import Todo from "./Todo"

const List = () => {
    return(
        <div className="ui container">
            <div className="ui grid center aligned">
                <Todo />
            </div>
        </div>
    );
}

export default List;