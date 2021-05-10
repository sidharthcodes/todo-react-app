import React, {useState} from "react";

const Todo = () => {

    const [isEditing, setIsEditing] = useState(false);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    }

    return(
        isEditing ? 
        <input /> :
        <div className="row" onDoubleClick={handleDivDoubleClick}>
            <div className="column five wide">
                <h3>List-Item-1</h3>
            </div>
            <div className="column one wide">
                <button className="ui button circular icon blue"><i className="check icon"></i></button>
            </div>
            <div className="column one wide">
                <button className="ui button circular icon red"><i className="remove icon"></i></button>
            </div>
        </div>
    );
}

export default Todo;