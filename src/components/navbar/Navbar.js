import React from "react";
import "./Navbar.css";
import { BsBellFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import logo from "../static/logo.png";

function Navbar() {
  return (
    <div className="nav_main">
      <div className="nav_left">
        <div className="logo">
          <img src={logo} alt="" className="img" />
        </div>
        <div className="links">
        </div>
      </div>
      <div className="nav_right">
        <div className="bell">
          <BsBellFill size="1.5rem" />
        </div>
        <div className="avtar">
          <FaUserAlt size="1.5rem" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
