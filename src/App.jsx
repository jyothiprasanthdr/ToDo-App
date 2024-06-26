import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todoList", JSON.stringify({ todoList: newList }));
  }

  const handleAddList = (newTodo) => {
    if (newTodo) {
      const newTodoList = [...todoList, newTodo];
      persistData(newTodoList);
      setTodoList(newTodoList);
    }
  };

  const handleDeleteList = (index) => {
    const newTodoList = todoList.filter((todo, todoInd) => {
      return todoInd !== index;
    });
    persistData(newTodoList);
    setTodoList(newTodoList);
  };

  const editTodoList = (index) => {
    const edit = todoList[index];
    setTodoValue(edit);

    handleDeleteList(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todoList");

    if (localTodos) {
      localTodos = JSON.parse(localTodos).todoList;
      setTodoList(localTodos);
    }
  }, []);

  return (
    <>
      <TodoInput
        handleAddList={handleAddList}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        handleDeleteList={handleDeleteList}
        todoList={todoList}
        editTodoList={editTodoList}
      />
    </>
  );
}
