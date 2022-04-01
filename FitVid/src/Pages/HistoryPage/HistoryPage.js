import React from 'react'
import { Navbar, Footer, SideBar, Video, useHistory, EmptyList} from "./index";
import {likedVideos} from "../../Temp/likedvideos";
import "./historypage.css";

const HistoryPage = () => {
    const {historyVideos} = useHistory();
  return (
    <div>
      <Navbar />
      <div className="content-section">
        <SideBar />
        <div className="content">
          <h1 className="history-videos-heading">My History</h1>
          {historyVideos.length > 0 ? (
            <div className="history-videos-video-container">
              {historyVideos.map((historyVideo) => {
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
  )
}

export default HistoryPage