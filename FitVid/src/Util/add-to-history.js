import Axios from "axios";

const addToHistoryVideos = async (video) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/history",
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
      message: "Added To History Videos",
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

export { addToHistoryVideos };
