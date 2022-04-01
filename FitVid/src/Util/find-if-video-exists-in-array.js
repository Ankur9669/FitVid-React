const findIfVideoExistsInArray = (array, videoId) => {
  return array.some((arrayItem) => arrayItem._id === videoId);
};

export { findIfVideoExistsInArray };
