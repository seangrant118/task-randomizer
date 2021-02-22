import React, { useEffect } from "react";
import "./MyTasks.css";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

function MyTasks() {
  const [{ user, tasks }, dispatch] = useStateValue();

  const dbQuery = () => {
    let state = [];
    db.collection("users")
      .doc(user?.uid)
      .collection("tasks")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          state.push(doc.id);
        });
        return state;
      });
  };

  return (
    <div className="tasks">
      <div className="tasks__container">
        <h2 className="tasks__title">My Tasks</h2>
        <div className="task__items">
          {tasks.map((task) => (
            <div>{task}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
