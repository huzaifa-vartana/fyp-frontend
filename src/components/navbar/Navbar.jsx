import React from "react";
import "./Navbar.css";
import img1 from "./rsz_daan-huttinga-v6rdg-w74um-.png";
import img2 from "./right-arrow.png";
import img3 from "./logo_transparent.png";
export const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Web_1920__2">
        <svg className="Rectangle_5">
          <rect
            className="Rectangle_5"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="1920"
            height="1080"
          ></rect>
        </svg>
        <svg className="Path_3_j" viewBox="0 0 1920 219.15">
          <linearGradient
            className="Path_3_j"
            spreadMethod="pad"
            x1="1"
            x2="0"
            y1="0.089"
            y2="0.093"
          >
            <stop offset="0" stop-color="#65b2a6" stop-opacity="1"></stop>
            <stop offset="1" stop-color="#c4e3de" stop-opacity="1"></stop>
            <stop offset="1" stop-color="#fce7f6" stop-opacity="1"></stop>
          </linearGradient>
          <path
            className="Path_3_j"
            d="M 0 0 L 1920 0 L 1920 219.1499938964844 L 0 219.1499938964844 L 0 0 Z"
          ></path>
        </svg>
        <svg className="Rectangle_7">
          <rect
            className="Rectangle_7"
            rx="23.5"
            ry="23.5"
            x="0"
            y="0"
            width="206"
            height="47"
          ></rect>
        </svg>
        <svg className="Rectangle_6">
          <rect
            className="Rectangle_6"
            rx="23.5"
            ry="23.5"
            x="0"
            y="0"
            width="206"
            height="47"
          ></rect>
        </svg>
        <div className="Log_In">
          <span>Log In</span>
        </div>
        <div className="Scroll_Group_2">
          <div className="Sign_Up">
            <span>Sign Up</span>
          </div>
          <div className="Sign_Up_p">
            <span>Sign Up</span>
          </div>
        </div>

        <img
          className="rsz_daan-huttinga-v6rdg-w74um-"
          src={img1}
          alt="ooop"
          //   srcset="
          //   rsz_daan-huttinga-v6rdg-w74um-.png    1x,
          //   rsz_daan-huttinga-v6rdg-w74um-@2x.png 2x
          // "
        />
        <svg className="Rectangle_8">
          <rect
            className="Rectangle_8"
            rx="33.5"
            ry="33.5"
            x="0"
            y="0"
            width="163"
            height="67"
          ></rect>
        </svg>
        <img
          className="right-arrow"
          src={img2}
          alt="oop"
          //   srcset="right-arrow.png 1x, right-arrow@2x.png 2x"
        />
        <img
          className="logo_transparent"
          src={img3}
          alt="oop"
          //   srcset="logo_transparent.png 1x, logo_transparent@2x.png 2x"
        />
      </div>
    </React.Fragment>
  );
};
