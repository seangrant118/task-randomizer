import React, { useState, useEffect } from "react";
import "./MyTasks.css";
import { useStateValue } from "../../StateProvider";
import CreateTask from "../CreateTask/CreateTask";
import AddIcon from "@material-ui/icons/Add";

function MyTasks() {
  const [{ user, tasks }, dispatch] = useStateValue();
  const [create, setCreate] = useState(false);

  useEffect(() => {
    setCreate(false);
  }, [tasks]);

  const deleteTask = (e) => {
    dispatch({
      type: "DELETE_TASK",
      task: e.target.value,
      user: user,
    });
  };

  const createNewTask = () => {
    setCreate(!create);
  };

  return (
    <div className="tasks">
      <div className="tasks__container">
        <div className="tasks__header">
          <h2 className="tasks__title">My Tasks</h2>
          <button onClick={createNewTask}>
            <AddIcon />
          </button>
        </div>
        {create && <CreateTask />}

        <div className="task__items">
          {tasks.length >= 1 ? (
            tasks.map((task) => (
              <div key={task} className="task__item">
                {task}
                <button
                  className="task__delete"
                  value={task}
                  onClick={deleteTask}
                >
                  x
                </button>
              </div>
            ))
          ) : (
            <div>No tasks to display!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
