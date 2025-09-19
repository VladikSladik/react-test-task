const TodoItem = ({ todo }) => {
  const { title, completed } = todo;

  const handleChange = () => {
    completed = !completed;
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
