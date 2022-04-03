const playListReducer = (playLists, action) => {
  switch (action.type) {
    case "SET_PLAYLISTS":
      return [...action.payload.value];

    case "SET_PLAYLIST_VIDEOS":
      const updatedplayList = action.payload.value;
      const playlistIndex = playLists.findIndex(
        (playlist) => playlist._id === updatedplayList._id
      );
      const newPlayLists = [...playLists];
      newPlayLists[playlistIndex] = updatedplayList;
      console.log(newPlayLists);
      return newPlayLists;
    default:
      return playLists;
  }
};
export { playListReducer };
