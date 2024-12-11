import { NavLink } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import "./App.css";

const Navbar = () => {
  return (
    // drop-shadow-[0_1px_2px_3px_1px_rgba(0,0,0,0.11)]
    <div className="navBar bg-card drop-shadow-[0_4px_2px_rgba(0,0,0,0.11)]">
      <div className="navLink">
        <NavLink className=" duration-500" to="/">
          Home
        </NavLink>
      </div>
      <div className="navLink">
        <NavLink className=" duration-500" to="/about">
          About
        </NavLink>
      </div>
      <div className="navLink">
        <NavLink className=" duration-500" to="/experience">
          Experience
        </NavLink>
      </div>
      <div className="navLink">
        <NavLink className=" duration-500" to="/resume">
          Resume
        </NavLink>
      </div>
      <div className="navLink max-sm:pr-[4px]">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
