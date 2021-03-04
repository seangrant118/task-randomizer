import React from "react";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const signOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div className="header__home">
        <Link to="/">
          <p className="header__text">Randomize Task</p>
        </Link>
      </div>
      <div className="header__right">
        <Link to="/signin">
          {user ? (
            <div onClick={signOut} className="header__option">
              <p className="header__signin header__text">Sign out</p>
              <AccountCircleIcon />
            </div>
          ) : (
            <div className="header__option">
              <p className="header__signin header__text">Sign in</p>
              <AccountCircleIcon />
            </div>
          )}
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
