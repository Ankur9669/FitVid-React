import React, { useEffect } from "react";
import {
  Navbar,
  Footer,
  SideBar,
  Video,
  useLiked,
  useToast,
  useUser,
  useNavigate,
} from "./index";
import "./likedvideos.css";
import EmptyList from "../../Components/EmptyList/EmptyList";

const LikedVideos = () => {
  const { likedVideos } = useLiked();
  const { user } = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();

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
          <h1 className="likedvideos-heading">LikedVideos</h1>
          {likedVideos.length > 0 ? (
            <div className="likedvideos-video-container">
              {likedVideos.map((likedVideo) => {
                return <Video key={likedVideo._id} video={likedVideo} />;
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

export default LikedVideos;
