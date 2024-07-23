import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-button">
        <span className="material-icons">arrow_back_ios</span>
      </div>
      <h1 className="date-day">
        2024 July 22 <span className="bold">TUESDAY</span>
      </h1>
      <div className="nav-button">
        <span className="material-icons">arrow_forward_ios</span>
      </div>
    </header>
  );
};

export default Header;
