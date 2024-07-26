import React from "react";
import "../css/Header.css";

const Header = ({ currentDate, handlePrevDay, handleNextDay }) => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  const formatWeekday = (date) => {
    const options = { weekday: "long" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <header className="header">
      <div className="nav-button" onClick={handlePrevDay}>
        <span className="material-icons">arrow_back_ios</span>
      </div>
      <h1 className="date-day">
        {formatDate(currentDate)}
        <span className="bold">{formatWeekday(currentDate).toUpperCase()}</span>
      </h1>
      <div className="nav-button" onClick={handleNextDay}>
        <span className="material-icons">arrow_forward_ios</span>
      </div>
    </header>
  );
};

export default Header;
