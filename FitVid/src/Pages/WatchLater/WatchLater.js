import React, { useEffect } from "react";
import {
  Navbar,
  Footer,
  SideBar,
  Video,
  EmptyList,
  useWatchLater,
  useToast,
  useNavigate,
  useUser,
  useDocumentTitle,
} from "./index";
import "./watchlater.css";
const WatchLater = () => {
  const { showToast } = useToast();
  const { user } = useUser();
  const { watchLaterVideos } = useWatchLater();
  const navigate = useNavigate();
  useDocumentTitle("FitVid-WatchLater");

  useEffect(() => {
    if (!user.isUserLoggedIn) {
      showToast("Please Login First", "ERROR");
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="content-section">
        <SideBar />
        <div className="content">
          <h1 className="watchlater-heading">WatchLater</h1>
          {watchLaterVideos.length > 0 ? (
            <div className="watchlater-video-container">
              {watchLaterVideos.map((watchLaterVideo) => {
                return (
                  <Video key={watchLaterVideo._id} video={watchLaterVideo} />
                );
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

export default WatchLater;
