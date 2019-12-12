import React, { useState, useContext } from "react";
import { ListContext } from "./ToDoApp";

const AddToDo = props => {
  const [todo, updateTodo] = useState("");
  const { updateList } = useContext(ListContext);

  const addToDoAction = () => {
    updateList(list => [
      ...list,
      { id: list.length + 1, name: todo, done: false }
    ]);
    updateTodo("");
  };

  return (
    <div>
      <input onChange={e => updateTodo(e.target.value)} value={todo} />
      <button onClick={addToDoAction}>Add</button>
    </div>
  );
};

export default AddToDo;
