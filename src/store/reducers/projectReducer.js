const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project success");
      return state;
    case "CREATE_PROJECT_ERROR":
      return state;
    default:
      return state;
  }
};

export default projectReducer;
