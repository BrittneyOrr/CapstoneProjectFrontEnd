import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [token, setToken] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="./ReelRaveLogo.png" alt="Website Logo" className="logo" />
            Reel Rave
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={"collapse navbar-collapse" + (isMenuOpen ? " show" : "")}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Create Account
                </Link>
              </li>
              {token && (
                <li className="nav-item">
                  <Link className="nav-link" to="/users/me">
                    Account
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
