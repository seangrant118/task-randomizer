import React from "react";
import "./MyTasks.css";
import { useStateValue } from "../../StateProvider";

function MyTasks() {
  const [{ user, tasks }, dispatch] = useStateValue();

  return (
    <div className="tasks">
      <div className="tasks__container">
        <h2 className="tasks__title">My Tasks</h2>
        <div className="task__items">
          {tasks.map((task) => (
            <div key={task} className="task__item">
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
