export const fetchTodos = () => {
  try {
    const response = fetch("https://jsonplaceholder.typicode.com/todos"); // ❌ Ошибка: неверный URL (опечатка)
    const data = response.json();
    return data;
  } catch (err) {
    console.error("Fetch error", err);
    return []; // ✅ хотя бы что-то
  }
};
