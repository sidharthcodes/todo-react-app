import React, {useState} from "react";

const Todo = ({ title, completed, removeTodo, editTodo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    }

    const handleInputKeyDown = (event) => {
        const key = event.keyCode;
        if(key === 13){ // 13 -> enter
            editTodo({ title: tempValue});
            setValue(tempValue);
            setIsEditing(false);
        }else if(key === 27){ // 27 -> escape
            setTempValue(value);
            setIsEditing(false);
        }
    }

    const handleInputChange = (event) => {
        setTempValue(event.target.value);
    }

    const handleButtonClick = () => {
        setCompleted((oldCompletedState) => {
            const newState = !oldCompletedState;
            editTodo({ completed: newState });
            return newState;
        });
    }

    return(
        <div className="row">
            {    
            isEditing ? 
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleInputChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div> :
                <>
                    <div className="column six wide" onDoubleClick={handleDivDoubleClick}>
                        {completedState ? <h3><s>{value}</s></h3> : <h3>{value}</h3>}
                    </div>
                    <div className="column one wide">
                        <button 
                            className={"ui button circular icon" + (completedState ? " green" : " blue")}
                            onClick={handleButtonClick}
                        >
                            <i className="check icon"></i>
                        </button>
                    </div>
                    <div className="column one wide">
                        <button 
                            className="ui button circular icon red"
                            onClick={removeTodo}
                        >
                            <i className="remove icon"></i>
                        </button>
                    </div>
                </>
            }
        </div>
    );
}

export default Todo;