import React, { useState, useEffect } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/SideBar/SideBar";
import { likedVideos } from "../../Temp/likedvideos";
import Video from "../../Components/Video/Video";
import EmptyList from "../../Components/EmptyList/EmptyList";
import { usePlayLists } from "../../Context/playlist-context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./playlist.css";

const PlayList = () => {
  const { playLists, dispatchPlayLists } = usePlayLists();
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");

  useEffect(() => {
    const playlist = playLists.find((playlist) => playlist._id === playlistId);
    if (playlist == undefined) {
      // Navigate 404
      navigate("/login");
      return null;
    }
    setPlaylistVideos(playlist.videos);
    setPlaylistTitle(playlist.title);
  }, [playLists]);

  return (
    <div>
      <Navbar />
      <div className="content-section">
        <SideBar />
        <div className="content">
          <h1 className="playlist-heading">{playlistTitle}</h1>
          {playlistVideos.length > 0 ? (
            <div className="playlist-video-container">
              {playlistVideos.map((playlistVideo) => {
                return (
                  <Video
                    key={playlistVideo._id}
                    video={playlistVideo}
                    isPlayListVideo={true}
                  />
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

export default PlayList;
