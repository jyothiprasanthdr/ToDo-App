import React from "react";

function TodoCard(props) {
  const { children, handleDeleteList, index, editTodoList } = props;

  return (
    <li className="flex w-4/5  gap-1 text-purple-900 w-min-[640px] w-max-screen bg-white rounded justify-center items-center p-2 mx-auto sm:3/5 md:2/5 ">
      {children}
      <button
        className=" w-auto p-1 justify-end "
        onClick={() => {
          editTodoList(index);
        }}
      >
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button
        className="w-auto p-1"
        onClick={() => {
          handleDeleteList(index);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}

export default TodoCard;
