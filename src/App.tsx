import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, [todos]); // ❌ Ошибка: бесконечный цикл

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      title: "New Task",
      completed: false,
    };

    // ❌ Ошибка: используем неактуальное значение todos
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
