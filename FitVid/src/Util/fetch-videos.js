import Axios from "axios";
const fetchVideos = async () => {
  try {
    const response = await Axios.get("api/videos");
    const videos = response?.data?.videos;

    return {
      data: videos,
      success: true,
      message: "Data Fetched Successfully",
    };
  } catch (e) {
    return {
      data: "",
      success: false,
      message: `Error: ${e}`,
    };
  }
};

export { fetchVideos };
