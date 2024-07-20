import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import { Main } from "./main";
// import { About } from "./about";
// import { Contact } from "./contact";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navLink">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navLink">
        <NavLink to="/experience">Experience</NavLink>
      </div>
      <div className="navLink">
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="navLink">
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </div>

    //  <Router>
    //   <Routes>
    //     <Route path="/" element={<Main />} />
    // <Route path="/about" element={<About />} />
    //      <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
  );
};

export default Navbar;
