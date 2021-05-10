import React, {useState} from "react";

const Form = () => {

    const [inputValue, setInputvalue] = useState("");

    const handleInputChange = (event) => {
        setInputvalue(event.target.value);
    }

    return(
        <form className="ui form">
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