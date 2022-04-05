const findIfVideoExistsInArray = (array, videoId) => {
  return array.some((arrayItem) => arrayItem._id === videoId);
};

const findIfPlayListExistsInArray = (playlists, playListTitle) => {
  return playlists.some((playItem) => playItem.title === playListTitle);
};

export { findIfVideoExistsInArray, findIfPlayListExistsInArray };
