import { Link } from "react-router-dom";
import "./Foot.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box footer-brand">
          <Link to="/" className="footer-logo">
            BOOKNEST
          </Link>

          <p>
            Your cozy corner for discovering amazing books,
            inspiring stories, and timeless classics.
          </p>
        </div>


        {/* Quick Links */}
        <div className="footer-box">
          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/add-book">Add Books</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>


        {/* Contact */}
        <div className="footer-box">
          <h3>CONTACT US</h3>

          <p>booknest@gmail.com</p>
          <p>+91 98765 43210</p>
          <p>Tamil Nadu, India</p>
        </div>

      </div>


      <div className="footer-bottom">
        <p>© 2026 BookNest. All Rights Reserved.</p>

        <span>READ · DISCOVER · GROW</span>
      </div>

    </footer>
  );
};

export default Footer;