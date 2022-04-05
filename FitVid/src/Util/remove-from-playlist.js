import Axios from "axios";

const removeFromPlayList = async (videoId, playListId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(
      `/api/user/playlists/${playListId}/${videoId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return {
      data: response.data,
      success: true,
      message: "Removed From PlayList",
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

export { removeFromPlayList };
