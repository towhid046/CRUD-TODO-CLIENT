
import { toast } from "react-toastify";
import "./App.css";

function App() {

  const handleTodoForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const todo = { title };

    fetch("https://todo-crud-server.vercel.app/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Todo Added Success', {
            autoClose: 2000,
          })
          e.target.reset();
        }
      });
  };


  return (
    <section>
      <h2>Create Todo</h2>
      <form onSubmit={handleTodoForm}>
        <input type="text" name="title" placeholder="Write your todo" />
        <input type="submit" value="Add" />
      </form>
    </section>
  );
}

export default App;
