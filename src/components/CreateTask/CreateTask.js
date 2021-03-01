import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./CreateTask.css";
import { useStateValue } from "../../StateProvider";

function CreateTask() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [{ tasks, user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      setError("Cannont add an empty task");
      return;
    }
    setError("");
    const i = tasks.findIndex((item) => item === task);

    if (i < 0) {
      dispatch({
        type: "ADD_TASK",
        task: task,
        user: user,
      });
      setTask("");
    } else {
      setError("This task already exists!");
    }
  };

  const twoCalls = (e) => {
    setTask(e.target.value);
    setError("");
  };

  const removeError = () => {
    setError("");
  };

  return (
    <div className="create">
      <div className="create__container">
        <div className="create__items">
          <form onSubmit={handleSubmit}>
            <input
              value={task}
              className="create__input"
              onChange={(e) => twoCalls(e)}
              placeholder={"Enter a new task"}
            />
          </form>
        </div>
        <button onClick={handleSubmit} className="create__button">
          <AddIcon />
        </button>
        <div onClick={removeError} className="create__error">
          {error}
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
