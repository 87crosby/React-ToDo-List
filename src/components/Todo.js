import React, { useState } from "react";

const Todo = (props) =>{
    const todoClasses = ["ml-2"];

    if (props.todo.complete) {
        todoClasses.push("line-through")
    }
    return( <div>
        <input onChange={(event) =>{
            props.handleToggleComplete(props.i);
        }}
        checked={props.todo.complete}
        type="checkbox"/>

        <span className={todoClasses.join(" ")}>{props.todo.text}</span>

        <button className="btn ml-2" onClick={(event) =>{
            props.handleTodoDelete(props.i);
        }}>Delete</button>
    </div>
    )
}

export default Todo