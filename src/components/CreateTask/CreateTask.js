import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./CreateTask.css";
import { useStateValue } from "../../StateProvider";

function CreateTask() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [{ tasks, user }, dispatch] = useStateValue();

  const handleSubmit = () => {
    setError("");
    const i = tasks.findIndex((item) => item === task);

    if (i < 0) {
      dispatch({
        type: "ADD_TASK",
        task: task,
        user: user,
      });
      setTask("");
      setError("task created successfully!");
    } else {
      setError("This task already exists!");
    }
  };

  return (
    <div className="create">
      <div className="create__container">
        <div className="create__items">
          <textarea
            value={task}
            className="create__input"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="create__button">
          <AddIcon />
        </button>
        <div>{error}</div>
      </div>
    </div>
  );
}

export default CreateTask;
