import React, { useEffect } from "react";
import {
  Navbar,
  Footer,
  SideBar,
  Video,
  useHistory,
  EmptyList,
  useNavigate,
  useToast,
  useUser,
  deleteHistory,
  SecondaryButton,
  useDocumentTitle,
} from "./index";
import "./historypage.css";

const HistoryPage = () => {
  const { historyVideos, dispatchHistoryVideos } = useHistory();
  const historyVideosToShow = [...historyVideos].reverse();
  const { user } = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();
  useDocumentTitle("FitVid-History");

  useEffect(() => {
    if (!user.isUserLoggedIn) {
      showToast("Please Login First", "ERROR");
      navigate("/login");
    }
  }, []);

  const handleClearHistoryClick = async () => {
    const { data, success, message } = await deleteHistory();
    if (success) {
      dispatchHistoryVideos({
        type: "SET_HISTORY_LIST",
        payload: { value: data.history },
      });
      showToast("History Deleted Successfully", "SUCCESS");
    } else {
      showToast("Something went wrong", "ERROR");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="content-section">
        <SideBar />
        <div className="content">
          <div className="history-videos-heading-container">
            <h1 className="history-videos-heading">My History</h1>
            <SecondaryButton
              className="clear-history-button"
              buttonText="Clear History"
              onClick={handleClearHistoryClick}
            />
          </div>

          {historyVideosToShow.length > 0 ? (
            <div className="history-videos-video-container">
              {historyVideosToShow.map((historyVideo) => {
                return <Video key={historyVideo._id} video={historyVideo} />;
              })}
            </div>
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HistoryPage;
