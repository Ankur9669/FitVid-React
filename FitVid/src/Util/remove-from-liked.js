import Axios from "axios";

const removeFromLikedVideos = async (videoId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(`/api/user/likes/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    return {
      data: response.data,
      success: true,
      message: "Removed From Liked Videos",
    };
  } catch (e) {
    return {
      data: "",
      success: false,
      message: `SomeThing Went Wrong ${e}`,
    };
  }
};

export { removeFromLikedVideos };
