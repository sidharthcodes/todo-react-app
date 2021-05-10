import React from "react";

const Form = () => {
    return(
        <form className="ui form">
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column six wide">
                        <input type="text" placeholder="Enter task todo..."/>
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