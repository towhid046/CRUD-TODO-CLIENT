import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegPenToSquare } from "react-icons/fa6";

const Todos = () => {
  const initialTodos = useLoaderData();
  const [todos, setTodos] = useState(initialTodos);

  const handleRemoveTodo = (id) => {
    fetch(`https://todo-crud-server.vercel.app/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reminigTodos = todos.filter((todo) => todo._id !== id);
          setTodos(reminigTodos);
          toast.success("Todo Delete Success", {
            autoClose: 1000,
          });
        }
      });
  };

  const items = todos?.map((todo) => (
    <li key={todo._id}>
      <span>{todo.title}</span>
      <Link to={`/update-todo/${todo._id}`}>
        <button>
          <FaRegPenToSquare />
        </button>
      </Link>
      <button onClick={() => handleRemoveTodo(todo._id)}>X</button>
    </li>
  ));

  return (
    <div>
      <h2>Todo List</h2>
      <ol>{items}</ol>
    </div>
  );
};

export default Todos;
