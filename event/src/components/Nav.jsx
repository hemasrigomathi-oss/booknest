import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">BOOKNEST</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;