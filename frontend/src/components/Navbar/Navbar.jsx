import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-container">

        {/* Logo */}

        <Link to="/" className="logo">

          <FaLeaf className="logo-icon" />

          <div>

            <h2>LeafLens AI</h2>

            <p>Healthy Plants, Smarter Farming</p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/detect"
              className={location.pathname === "/detect" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Detect Disease
            </Link>
          </li>

        </ul>

        {/* Mobile */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;