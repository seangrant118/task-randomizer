import React from "react";
import { auth } from "../../firebase.js";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const history = useHistory();

  const googleSignIn = (e) => {
    e.preventDefault();

    const provider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        // const credential = result.credential;
        // const token = credential.accessToken;
        // const user = result.user;
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const credential = error.credential;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="signin__container">
      <button onClick={googleSignIn} className="signin">
        <img
          className="google__logo"
          alt="googlelogo"
          src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
        ></img>
        Sign in With Google
      </button>
    </div>
  );
}

export default SignIn;
