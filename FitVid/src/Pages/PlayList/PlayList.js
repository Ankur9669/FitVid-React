import React, { useState, useEffect } from "react";
import {
  Navbar,
  Footer,
  SideBar,
  Video,
  EmptyList,
  usePlayLists,
  useParams,
  useNavigate,
  useDocumentTitle,
} from "./index";
import "./playlist.css";

const PlayList = () => {
  const { playLists, dispatchPlayLists } = usePlayLists();
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");
  useDocumentTitle("FitVid-Playlist");

  useEffect(() => {
    const playlist = playLists.find((playlist) => playlist._id === playlistId);
    if (playlist == undefined) {
      // Navigate 404
      navigate("/login");
      return <></>;
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
