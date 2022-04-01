import Axios from "axios";

const addToLikedVideos = async (video) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/likes",
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
      message: "Added To Liked Videos",
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

export { addToLikedVideos };
