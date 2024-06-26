import React, { useState } from "react";

function TodoInput(props) {
  const { handleAddList, setTodoValue, todoValue } = props;

  return (
    <header className="p-2 flex justify-center  gap-2 h-auto m-auto w-4/5 sm:4/5 md:3/5">
      <input
        className=" w-full  p-2  rounded hover:outline outline-purple-800 sm:w-4/5  md:w-3/5"
        type="text"
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        className="p-2 rounded bg-purple-900 text-white"
        onClick={() => {
          handleAddList(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
