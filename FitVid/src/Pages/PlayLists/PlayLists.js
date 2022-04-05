import React, { useEffect } from "react";
import EmptyList from "../../Components/EmptyList/EmptyList";
import { usePlayLists } from "../../Context/playlist-context";
import { Navbar, SideBar, useToast, useUser, Footer } from "../LikedVideos";
import { useNavigate } from "react-router-dom";
import PlayListVideo from "./PlayListVideo/PlayListVideo";
import "./playlists.css";
import EmptyPlayList from "./EmptyPlayList/EmptyPlayList";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const PlayLists = () => {
  const { playLists, dispatchPlayLists } = usePlayLists();
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
          <div className="playlists-videos-heading-container">
            <h1 className="playlists-videos-heading">PlayLists</h1>
          </div>

          {playLists.length > 0 ? (
            <div className="playlists-container">
              {playLists.map((playList) => {
                return <PlayListVideo playList={playList} key={playList._id} />;
              })}
            </div>
          ) : (
            <EmptyPlayList />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlayLists;
