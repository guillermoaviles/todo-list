import React from "react";
import ToDo from "./ToDo";
import './ToDoList.css';

function ToDoList({todos, setTodo}) {

    
    return(
        <div className="todo-list">
            {todos.map((item) => {
                return (
                    <ToDo todo={item} setTodo={setTodo}/>
                )
            })}
        </div>
    )
}

export default ToDoList;


