import { NavLink } from "react-router-dom";
// import { ModeToggle } from "./components/mode-toggle";
import "./App.css";
import { Button } from "./components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./components/theme-provider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

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
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
};

export default Navbar;
