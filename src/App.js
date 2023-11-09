import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch(() => {
        setErrorMsg("Error!!!");
      });
  }, []);

  return (
    <>
      <h1>TODO</h1>
      {errorMsg && <p>{errorMsg}</p>}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : undefined,
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
