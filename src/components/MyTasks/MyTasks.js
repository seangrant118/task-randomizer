import React from "react";
import "./MyTasks.css";
import { useStateValue } from "../../StateProvider";

function MyTasks() {
  const [{ user, tasks }, dispatch] = useStateValue();

  const deleteTask = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "DELETE_TASK",
      task: e.target.value,
      user: user,
    });
  };

  return (
    <div className="tasks">
      <div className="tasks__container">
        <h2 className="tasks__title">My Tasks</h2>
        <div className="task__items">
          {tasks.map((task) => (
            <div key={task} className="task__item">
              {task}
              <button value={task} onClick={deleteTask}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
