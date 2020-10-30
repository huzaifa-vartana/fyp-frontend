import React from "react";
import logo from "../../../src/img/logo.png";
export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {/* <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p> */}
          <div className="buttons logo">
            <a href="#">
              <img src={logo} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
