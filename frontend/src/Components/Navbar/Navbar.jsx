import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Images/Quade Azam uni Logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark Navbar">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <button className="navbar-toggler Toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse Link-Sec" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <div className="dropdown dropDown">
              <button className="dropbtn nav-link">More ↓</button>
              <div className="dropdown-content">
                <a className="dropdown-item" href="/">Home</a>
                <a className="dropdown-item" href="https://qau.edu.pk/about-the-registrar-office/">About</a>
                <a className="dropdown-item" href="https://qau.edu.pk/contact-list/">Contact</a>
              </div>
            </div>
          </li>
          {/* <li className="nav-item">
            <div className="dropdown dropDown">
              <button className="dropbtn nav-link">Pages ↓</button>
              <div className="dropdown-content">
                <a className="dropdown-item" href="/">Home</a>
                <a className="dropdown-item" href="/about">About</a>
                <a className="dropdown-item" href="/contact">Contact</a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown dropDown">
              <button className="dropbtn nav-link">Pages ↓</button>
              <div className="dropdown-content">
                <a className="dropdown-item" href="/">Home</a>
                <a className="dropdown-item" href="/about">About</a>
                <a className="dropdown-item" href="/contact">Contact</a>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
