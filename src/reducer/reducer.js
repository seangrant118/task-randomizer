import { db } from "../firebase";

export const initialState = {
  tasks: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TASK":
      db.collection("users")
        .doc(action.user?.uid)
        .collection("tasks")
        .doc(action.task)
        .set({ task: action.task });
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    case "SET_TASKS":
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    case "EMPTY_TASKS":
      return {
        ...state,
        tasks: [],
      };

    case "DELETE_TASK":
      // delete from db
      db.collection("users")
        .doc(action.user?.uid)
        .collection("tasks")
        .doc(action.task)
        .delete()
        .then(() => {
          console.log(`Successfully deleted task: ${action.task}`);
        })
        .catch((error) => {
          console.error(`Error removing task: ${action.task}, ${error}`);
        });

      // delete from context api state

      const i = state.tasks.findIndex((task) => task === action.task);

      let newTasks = [...state.tasks];

      if (i >= 0) {
        newTasks.splice(i, 1);
      } else {
        console.warn(`cannot remove ${action.task}`);
      }

      return {
        ...state,
        tasks: newTasks,
      };
    default:
      return state;
  }
};
