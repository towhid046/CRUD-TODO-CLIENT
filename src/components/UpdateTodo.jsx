import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTodo = () => {
  const todo = useLoaderData();

  const navigate = useNavigate();

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const updateTodo = { title };

    fetch(`https://todo-crud-server.vercel.app/update-todo/${todo._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          e.target.reset();
          toast.success("Todo update success", {
            autoClose: 1000,
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <form onSubmit={handleUpdateForm}>
        <input type="text" name="title" defaultValue={todo?.title} /> <br />
        <input type="submit" value={"Update"} />
      </form>
    </div>
  );
};

export default UpdateTodo;
