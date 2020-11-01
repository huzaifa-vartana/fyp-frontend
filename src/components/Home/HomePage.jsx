import React from "react";
import "./HomePage.css";
import { Navbar } from "./Navbar/Navbar";
export const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="container">
        <div>
          <h1>Main Info</h1>
        </div>
      </section>
    </React.Fragment>
  );
};
