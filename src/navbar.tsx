import { NavLink } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import "./App.css";

const Navbar = () => {
  return (
    <div className="navBar bg-card">
      <div className="navLink">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navLink">
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="navLink">
        <NavLink to="/experience">Experience</NavLink>
      </div>
      <div className="navLink">
        <NavLink to="/resume">Resume</NavLink>
      </div>
      <div className="navLink">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
