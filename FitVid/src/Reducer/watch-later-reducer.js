const watchLaterReducer = (watchLaterList, action) => {
  switch (action.type) {
    case "SET_WATCH_LATER_LIST":
      return [...action.payload.value];
    default:
      return watchLaterList;
  }
};
export { watchLaterReducer };
