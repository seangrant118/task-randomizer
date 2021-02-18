import React, { useState } from "react";
import "./CreateTask.css";

function CreateTask() {
  const [task, createTask] = useState();

  return (
    <div className="create">
      <div className="create__container">
        <div className="create__items">
          <div className="create__title">Create a new task</div>
          <textarea
            className="create__input"
            onChange={(e) => createTask(e.target.value)}
          />
        </div>
        <button className="create__button">Create</button>
      </div>
    </div>
  );
}

export default CreateTask;
