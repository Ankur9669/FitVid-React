import Axios from "axios";

const createPlayList = async (playListTitle) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/playlists",
      {
        playlist: { title: playListTitle },
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

export { createPlayList };
