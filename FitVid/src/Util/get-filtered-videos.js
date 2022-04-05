const getFilteredVideos = (videos, search) => {
  return videos.filter(
    (video) =>
      video.categoryName.toLowerCase().includes(search.toLowerCase()) ||
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.channelName.toLowerCase().includes(search.toLowerCase())
  );
};

export { getFilteredVideos };
