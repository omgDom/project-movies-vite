import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

export const NavBar = () => (
    <nav>
        <NavLink to="/" className="navBarLogo"><h1>Movie Project</h1></NavLink>
        <ul className="navContainer">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
  );