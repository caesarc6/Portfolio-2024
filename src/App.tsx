import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // redirect,
} from "react-router-dom";
import Navbar from "./navbar";
import { Experience } from "./pages/experience";
import { About } from "./pages/about";
import { Resume } from "./pages/resume";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <div>
            <h1>Caesar's Portfolio 🙋🏽‍♂️</h1>
          </div>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
