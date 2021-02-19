import React, { useState } from "react";
import { db } from "../../firebase";
import "./CreateTask.css";
import { useStateValue } from "../../StateProvider";

function CreateTask() {
  const [task, setTask] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = () => {
    if (task && task !== "") {
      db.collection("users")
        .doc(user?.uid)
        .collection("tasks")
        .doc(task)
        .set({ task: task })
        .then(() => {
          setTask("");
          console.log("success!");
          console.log(task);
        });
    }
  };

  return (
    <div className="create">
      <div className="create__container">
        <div className="create__items">
          <div className="create__title">Create a new task</div>
          <textarea
            value={task}
            className="create__input"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="create__button">
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateTask;
