import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
  const updateToDoState = id => {
    const newList = props.list.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    props.updateToDoList(newList);
  };

  return (
    <div>
      {props.list.map(item => (
        <ToDoItem item={item} updateToDoState={updateToDoState} />
      ))}
    </div>
  );
};

export default ToDoList;
