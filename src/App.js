import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList';

function App() {

  const[todo, setTodo] = useState({
    title: '',
    completed: ''
  })

  const [todos, setTodos] = useState([])


  return (
    <div className="App">
      <ToDoForm todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} />
      <ToDoList todos={todos} setTodo={setTodo}/>
    </div>
  );
}

export default App;
