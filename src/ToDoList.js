import React, { useState, useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ListContext } from "./ToDoApp";

const ToDoList = props => {
  const { list, updateList } = useContext(ListContext);

  const updateToDoState = id => {
    const newList = list.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    updateList(newList);
  };

  return (
    <div>
      {list.map(item => (
        <ToDoItem item={item} updateToDoState={updateToDoState} />
      ))}
    </div>
  );
};

export default ToDoList;
