const historyReducer = (historyList, action) => {
    switch (action.type) {
      case "SET_HISTORY_LIST":
        return [...action.payload.value];
      default:
        return historyList;
    }
  };
  export { historyReducer };
  