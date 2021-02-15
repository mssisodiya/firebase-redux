const initState = {
  tasks: [
    { id: "1", title: "gym workout", content: "legs day" },
    { id: "1", title: "git push", content: "code" },
    { id: "1", title: "sleep", content: "good" },
  ],
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      console.log("Created Task", action.task);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default taskReducer;
