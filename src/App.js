import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignIn from "./components/Signin/SignIn";
import CreateTask from "./components/CreateTask/CreateTask";
import MyTasks from "./components/MyTasks/MyTasks";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const dbQuery = () => {
    db.collection("users")
      .doc(user?.uid)
      .collection("tasks")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("here");
          dispatch({
            type: "SET_TASKS",
            task: doc.id,
          });
        });
      });
  };
  useEffect(() => {
    dbQuery();
  }, [user]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/createtask">
            <CreateTask />
          </Route>
          <Route path="/mytasks">
            <MyTasks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
