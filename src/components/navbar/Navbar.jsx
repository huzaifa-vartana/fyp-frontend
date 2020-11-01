import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar-simple">
      <h1></h1>
      <ul>
        <li>
          <div className="btn-shape">
            <a href="/developers">Developers</a>
          </div>
        </li>
        <li>
          <div className="btn-shape">
            <a href="/register">Register</a>
          </div>
        </li>
        <li>
          <div className="btn-shape">
            <a href="/login">Login</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
