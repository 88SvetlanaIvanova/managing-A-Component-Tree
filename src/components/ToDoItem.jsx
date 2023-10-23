import React, { useState } from "react";

function ToDoItem({ text }) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevIsDone) => !prevIsDone);
    //sets the opposite of the previous value
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}

export default ToDoItem;
//text-decoration:line-through
//when I add a new todo item and I click on it, it cross out the item
//and when I click on it again it uncrosses it again
