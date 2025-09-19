import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./api";
const TodoList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetchTodos()
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, [todos]);

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      title: "New Task",
      completed: false,
    };

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
