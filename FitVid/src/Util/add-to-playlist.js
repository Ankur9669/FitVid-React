import Axios from "axios";

const addToPlayList = async (video, playListId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      `/api/user/playlists/${playListId}`,
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
      message: "Added To PlayList",
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

export { addToPlayList };
