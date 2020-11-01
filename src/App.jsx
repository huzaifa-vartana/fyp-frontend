import React, { Component } from "react";
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Signup} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};
