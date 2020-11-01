import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="new-navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Review It</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
