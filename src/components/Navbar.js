import React from "react";


import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/rocket">Rocket Details</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
