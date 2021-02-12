import React from "react";
import "./MyTasks.css";

function MyTasks() {
  return (
    <div className="tasks">
      <div className="tasks__container">
        <h2 className="tasks__title">My Tasks</h2>
        <div className="task__items"></div>
      </div>
    </div>
  );
}

export default MyTasks;
