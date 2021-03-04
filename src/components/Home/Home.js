import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { useStateValue } from "../../StateProvider";

function Home() {
  const [{ user, tasks }, dispatch] = useStateValue();
  const [currentTask, setCurrentTask] = useState(
    "Click to generate a random task"
  );
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/signin");
    }
  });

  const generateRandomTask = () => {
    if (tasks.length >= 1) {
      let random = Math.floor(Math.random() * tasks.length);
      setCurrentTask(tasks[random]);
    } else {
      setCurrentTask("No tasks to display! \n create some tasks!");
    }
  };

  const completeTask = () => {
    if (
      currentTask !== "Click to generate a random task" &&
      currentTask !== `You must generate a random task before completing`
    ) {
      dispatch({
        type: "DELETE_TASK",
        task: currentTask,
        user: user,
      });
      setCurrentTask(`Task completed! \n Click to generate a random task`);
    } else {
      setCurrentTask(`You must generate a random task before completing`);
    }
  };
  return (
    <div className="home">
      <div className="home__container">
        <button className="home__generate" onClick={generateRandomTask}>
          Get a random task
        </button>
        <div className="home__currentTask">{currentTask}</div>
        <button className="home__complete" onClick={completeTask}>
          Complete Task
        </button>
      </div>
    </div>
  );
}

export default Home;
