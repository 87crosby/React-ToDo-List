import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Todo from './components/Todo';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) =>{
    event.preventDefault();

    if(newTodo.length == 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    // Set todos and pass in new array containing new todos
    setTodos([...todos, todoItem])
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) =>{
    const filteredTodos = todos.filter((todo,i) =>{
      return i != delIdx;
    })

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) =>{
    const updatedTodos = todos.map((todo,i) =>{
      if (idx == i){
        todo.complete = !todo.complete;
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  return (
    <div className="container text-center">
      <h1>To-Do List:</h1>
        <form 
          onSubmit={(event) =>{
            handleNewTodoSubmit(event);
          }}
        >
        <input onChange={(event) => {
            setNewTodo(event.target.value);
          }} 
          type="text" 
          value={newTodo}
        />
          <div>
            <button className="btn">Add</button>
          </div>
        </form>

        <hr/>

        {todos.map((todo,i) => {
            return (
            <Todo 
              key={i} 
              i={i}
              todo={todo} 
              handleToggleComplete={handleToggleComplete} 
              handleTodoDelete={handleTodoDelete} 
              />);
          })}
    </div>
  );
}

export default App;
