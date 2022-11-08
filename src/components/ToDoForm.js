import React from "react"
import ToDoList from "./ToDoList"
import './ToDoForm.css';


function ToDoForm({todo, setTodo, todos, setTodos}) {


  function handleChange(event) {
    setTodo({
      title: event.target.value,
      completed: false
    })
  }

  function handleSave(event) {
    event.preventDefault()
    setTodos(
      [...todos, todo] 
    )
    setTodo({
      title: '',
      completed: false
    })
  }

  return(
    <div className="header">
      <form className="form">
        <div className="form-todo">To-do:</div>
        <input className='input-box' type="text" value={todo.title} name="name" onChange={handleChange} />
        <div className='submit' type="submit" value="Save" onClick={handleSave}>Save</div>
      </form>
    </div>
  )
}

export default ToDoForm;
