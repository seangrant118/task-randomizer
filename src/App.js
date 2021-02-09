import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignIn from "./components/Signin/SignIn";
import CreateTask from "./components/CreateTask/CreateTask";
import MyTasks from "./components/MyTasks/MyTasks";

function App() {
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
