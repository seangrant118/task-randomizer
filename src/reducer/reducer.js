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
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    default:
      return state;
  }
};
