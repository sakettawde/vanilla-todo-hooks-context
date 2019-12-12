import React, { useState } from "react";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

const defaultContext = {
  list: [],
  updateList: () => {}
};

export const ListContext = React.createContext(defaultContext);

const ToDoApp = props => {
  const [todoList, updateToDoList] = useState([
    { id: 1, name: "This thing change made", done: false }
  ]);

  const ctxValue = {
    list: todoList,
    updateList: updateToDoList
  };

  return (
    <div>
      <ListContext.Provider value={ctxValue}>
        <AddToDo />
        <ToDoList />
      </ListContext.Provider>
    </div>
  );
};

export default ToDoApp;
