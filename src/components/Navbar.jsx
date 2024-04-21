import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <NavLink to={"/"}>
        <button>Todos</button>
      </NavLink>
      <NavLink to={"/todos"}>
        <button>Create Todo</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
