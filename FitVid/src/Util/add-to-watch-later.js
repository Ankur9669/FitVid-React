import Axios from "axios";

const addToWatchLaterVideos = async (video) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/watchlater",
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return {
      data: response.data,
      success: true,
      message: "Added To Watch Later Videos",
    };
  } catch (e) {
    //TODO Implement Toast
    return {
      data: "",
      success: false,
      message: `SomeThing Went Wrong ${e}`,
    };
  }
};

export { addToWatchLaterVideos };
