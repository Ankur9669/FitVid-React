import React from 'react'
import { Navbar, Footer, SideBar, Video, useHistory, EmptyList} from "./index";
import {likedVideos} from "../../Temp/likedvideos";
import "./historypage.css";

const HistoryPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content-section">
        <SideBar />
        <div className="content">
          <h1 className="history-videos-heading">My History</h1>
          {likedVideos.length > 0 ? (
            <div className="history-videos-video-container">
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
  )
}

export default HistoryPage