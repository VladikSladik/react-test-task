const TodoItem = ({ todo }) => {
  const { title, completed } = todo;

  const handleChange = () => {
    completed = !completed; // Ошибка: нельзя изменять props напрямую
  };

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
    </li>
  );
};

export default TodoItem;
