const playListReducer = (playLists, action) => {
  switch (action.type) {
    case "SET_PLAYLISTS":
      return [...action.payload.value];
    default:
      return playLists;
  }
};
export { playListReducer };
