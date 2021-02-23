import React, { useState } from "react";
import "./Home.css";
import { useStateValue } from "../../StateProvider";

function Home() {
  const [{ user, tasks }, dispatch] = useStateValue();
  const [currentTask, setCurrentTask] = useState(
    "Click to generate a random task"
  );

  const generateRandomTask = () => {
    let random = Math.floor(Math.random() * tasks.length);
    setCurrentTask(tasks[random]);
  };

  const checkTask = () => {
    console.log(tasks);

    const i = tasks.findIndex((task) => task === tasks[0]);

    console.log(i);

    let newTasks = [...tasks];

    if (i >= 0) {
      newTasks.splice(i, 1);
    } else {
      console.warn(`cant remove task: ${tasks[0]}`);
    }

    console.log(newTasks);
  };
  return (
    <div className="home">
      <div className="home__container">
        <button className="home__generate" onClick={generateRandomTask}>
          Get a random task
        </button>
        <div className="home__currentTask">{currentTask}</div>
        <button className="home__complete" onClick={checkTask}>
          Complete Task
        </button>
      </div>
    </div>
  );
}

export default Home;
