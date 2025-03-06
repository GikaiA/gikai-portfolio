import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] =  useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="logo-link">GA</a>
      </div>
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="/services">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <div className="close-menu" onClick={() => setIsOpen(false)}>
          ✖
        </div>
      </ul>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
