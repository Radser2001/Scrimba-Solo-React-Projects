import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <img src={logo} alt="" className="nav-logo" />
        <span>My travel journey</span>
      </nav>
    </>
  );
};

export default Navbar;
