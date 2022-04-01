const likeReducer = (likeList, action) => {
  switch (action.type) {
    case "SET_LIKED_LIST":
      return [...action.payload.value];
    default:
      return likeList;
  }
};
export { likeReducer };
