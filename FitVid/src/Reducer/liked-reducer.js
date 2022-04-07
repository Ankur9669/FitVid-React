const likeReducer = (likeList, action) => {
  switch (action.type) {
    case "SET_LIKED_LIST":
      return [...action.payload.value];

    case "RESET":
      return [];

    default:
      return likeList;
  }
};
export { likeReducer };
