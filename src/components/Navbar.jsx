import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/" aria-label="BAIA Code Confidence Lab home">
        <span className="logo-mark">BAIA</span>
        <span className="logo-text">Code Confidence Lab</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/week1">Week 1</Link>
        <Link to="/week2">Week 2</Link>
        <Link to="/week3">Week 3</Link>
      </div>
    </nav>
  );
}

export default Navbar;
