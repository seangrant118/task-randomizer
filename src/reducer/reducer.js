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

    default:
      return state;
  }
};
