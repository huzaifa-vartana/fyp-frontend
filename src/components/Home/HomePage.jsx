import React from "react";
import "./HomePage.css";
import { Navbar } from "./Navbar/Navbar";
export const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section>
        <div className="container">
          <h1>Main Info</h1>
        </div>
      </section>
    </React.Fragment>
  );
};
