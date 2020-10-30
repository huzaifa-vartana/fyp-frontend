import React, { Component } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import "./App.css";
export const App = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Landing />
    </React.Fragment>
  );
};
