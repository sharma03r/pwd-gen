import React from "react";
import "./Navbar.css";

function Navbar() {
  const title = "{pwd}";
  return (
    <div className="navbar-div">
      <h1 className="navbar-h1">
        <span>{title}</span>gen
      </h1>
    </div>
  );
}

export default Navbar;
