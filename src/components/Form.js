import React, {useState} from "react";

const Form = ({ addTodo }) => {

    const [inputValue, setInputvalue] = useState("");

    const handleInputChange = (event) => {
        setInputvalue(event.target.value);
    }

    const handleFromSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim() === "") return;
        addTodo({ title: inputValue, completed: false });
        setInputvalue("");
    }

    return(
        <form className="ui form" onSubmit={handleFromSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column six wide">
                        <input
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter task todo..."/>
                    </div>
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;