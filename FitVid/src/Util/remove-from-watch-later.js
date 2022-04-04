import Axios from "axios";

const removeFromWatchLaterVideos = async (videoId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    return {
      data: response.data,
      success: true,
      message: "Removed From WatchLater Videos",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: `SomeThing Went Wrong ${e}`,
    };
  }
};

export { removeFromWatchLaterVideos };
