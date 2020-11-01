import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1></h1>
      <ul>
        <li>
          <div className="btn-shape">
            <a href="#">Developers</a>
          </div>
        </li>
        <li>
          <div className="btn-shape">
            <a href="#">Register</a>
          </div>
        </li>
        <li>
          <div className="btn-shape">
            <a href="#">Login</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
