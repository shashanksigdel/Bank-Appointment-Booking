import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="logoLink" exact="true" to="/">
        <img className="logo" src="images/logo.png" alt="merobooking" />
      </Link>
      <Link className="getHelpLink" exact="true" to="/getHelp">
        <button className="getHelpBtn">Docs</button>
      </Link>
    </nav>
  );
};

export default Navbar;
