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
      console.log(action.user.uid);
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    default:
      return state;
  }
};
