import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ToDoApp from "./ToDoApp";

function App() {
  return (
    <div>
      <h2>Todo App</h2>
      <ToDoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
