import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/TodoSlice";
import { MdSearch } from "react-icons/md";

const TodoInput = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch(todoActions);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(todoActions.addItem(item));
    setItem("");
  };

  return (
    <div className="mb-9">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={item}
          onChange={(event) => setItem(event.target.value)}
          className="p-4 outline-none border-2 border-white h-[3rem] w-[100%] rounded-md shadow-xl font-medium text-md text-gray-500"
        />
      </form>
    </div>
  );
};

export default TodoInput;
