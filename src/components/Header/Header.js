import React from "react";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__home">
        <Link to="/">
          <p>Randomize Task</p>
        </Link>
      </div>
      <div className="header__right">
        <Link to="/signin">
          <div className="header__option">
            <p className="header__signin">Sign in</p>
            <AccountCircleIcon />
          </div>
        </Link>
        <Link to="/createtask">
          <div className="header__option">
            <p className="header__addTask">Create Task</p>
            <AddIcon />
          </div>
        </Link>
        <Link to="/mytasks">
          <div className="header__option">
            <p className="header__taskList">My Tasks</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
