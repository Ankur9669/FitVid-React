const historyReducer = (historyList, action) => {
  switch (action.type) {
    case "SET_HISTORY_LIST":
      return [...action.payload.value];

    case "RESET":
      return [];

    default:
      return historyList;
  }
};
export { historyReducer };
