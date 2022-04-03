import React, { useEffect } from "react";
import EmptyList from "../../Components/EmptyList/EmptyList";
import { usePlayLists } from "../../Context/playlist-context";
import { Navbar, SideBar, useToast, useUser, Footer } from "../LikedVideos";
import { useNavigate } from "react-router-dom";
import PlayListVideo from "./PlayListVideo/PlayListVideo";
import "./playlists.css";
import EmptyPlayList from "./EmptyPlayList/EmptyPlayList";

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
          <h1 className="likedvideos-heading">PlayLists</h1>
          {playLists.length > 0 ? (
            <div className="playlists-container">
              {playLists.map((playList) => {
                return <PlayListVideo playList={playList} />;
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
