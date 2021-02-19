import React, { useEffect } from "react";
import "./MyTasks.css";
// import { db } from "../../firebase";
// import { useStateValue } from "../../StateProvider";

function MyTasks() {
  // const [{ user }, dispatch] = useStateValue();

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
