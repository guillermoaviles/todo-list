import React from "react";
import './ToDo.css';


function ToDo({todo, setTodo}) {
    console.log(todo);

    // Not able to change complated to true.
    // When someone clicks the "Mark as Complete" link, that item should update so 
    // the complete property for that to do is true; when the user clicks "Mark as Incomplete", 
    // it should update so that property is false.
    function handleClick() {
        setTodo({
            completed: true
        })
    }

    return(
        <div className="todo">
            <div className="content" id="title">{todo.title}</div>
            <div className="content" id="completed" onClick={handleClick}>{todo.completed ? 'Mark as Incomplete' :'Mark as Complete'}</div>
        </div>
    )
}

export default ToDo;

