import React, { useState } from "react";
import "./App.scss";
import todopic from "./assets/todo.jpg";
import Form from "./Form";

function App(props) {
  const [todo, setTodo] = useState([]);
  const toggleComplete = (i) =>
    setTodo(
      todo.map(
        (todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );
  return (
    <div className="main">
      <header>
        <h1 className="main-h1">What do you need to do?</h1>
      </header>
      <div className="todo-pic-div">
        <img className="todopic" alt="background" src={todopic}></img>
      </div>
      <Form setTodo={setTodo}
        onSubmit={(text) => setTodo([{ text, complete: false }, ...todo])}
      />
      <div className="todo-text">
        {todo.map(({ text, complete }, i ) => (
          <div key={text} 
          onClick={() => toggleComplete(i)}
          style={{
            textDecoration: complete ? 'line-through' : '',
          }}
          >
            {text}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
 