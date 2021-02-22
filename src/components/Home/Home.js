import React, { useState } from "react";
import "./Home.css";
import { useStateValue } from "../../StateProvider";

function Home() {
  const [{ user, tasks }, dispatch] = useStateValue();
  const [currentTask, setCurrentTask] = useState(
    "Click to generate a random task"
  );

  const generateRandomTask = () => {
    console.log(tasks);
    let random = Math.floor(Math.random() * tasks.length);
    setCurrentTask(tasks[random]);
  };
  return (
    <div className="home">
      <div className="home__container">
        <button className="home__generate" onClick={generateRandomTask}>
          Get a random task
        </button>
        <div className="home__currentTask">{currentTask}</div>
        <button className="home__complete">Complete Task</button>
      </div>
    </div>
  );
}

export default Home;
