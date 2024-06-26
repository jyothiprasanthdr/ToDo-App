import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todoList } = props;
  return (
    <ul className="flex flex-col w-auto space-y-2 p-1 mx-auto  ">
      {todoList.map((todo, todoInd) => {
        return (
          <TodoCard {...props} key={todoInd} index={todoInd}>
            <p className="w-4/5 p-1">{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
