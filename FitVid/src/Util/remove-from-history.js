import Axios from "axios";

const removeFromHistoryVideos = async (videoId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(`/api/user/history/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    return {
      data: response.data,
      success: true,
      message: "Removed From History Videos",
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

const deleteHistory = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete("/api/user/history/all", {
      headers: {
        authorization: token,
      },
    });
    return {
      data: response.data,
      success: true,
      message: "History Cleared",
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
export { removeFromHistoryVideos, deleteHistory };
