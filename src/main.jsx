import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todos from "./components/Todos";
import Root from "./Root.jsx";
import UpdateTodo from './components/UpdateTodo';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/todos",
        element: <App />,
      },
      {
        path: "/",
        element: <Todos />,
        loader: () => fetch("http://localhost:5000/todos"),
      },
      {
        path: "/update-todo/:id",
        element: <UpdateTodo />,
        loader: ({params}) => fetch(`http://localhost:5000/todos/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
