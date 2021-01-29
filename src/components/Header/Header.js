import React from "react";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__home">
        <p>Randomize Task</p>
      </div>
      <div className="header__right">
        <div className="header__option">
          <p className="header__signin">Sign in</p>
          <AccountCircleIcon />
        </div>
        <div className="header__option">
          <p className="header__addTask">Create Task</p>
          <AddIcon />
        </div>
        <div className="header__option">
          <p className="header__taskList">My Tasks</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
