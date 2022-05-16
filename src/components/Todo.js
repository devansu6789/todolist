import React from "react";
import TodoInput from "./TodoInput";
import TodoItemList from "./TodoItemList";

const Todo = () => {
  return (
    <div className="relative bottom-[10%] text-center">
      <h1 className="text-[10rem] font-medium text-white opacity-30 inline-block m-0 p-0">todos</h1>
      <TodoInput />
      <TodoItemList />
    </div>
  );
};

export default Todo;
