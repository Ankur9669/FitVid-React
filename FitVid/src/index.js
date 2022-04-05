import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { ToastProvider } from "./Context/toast-context";
import { UserProvider } from "./Context/user-context";
import { LikedProvider } from "./Context/liked-context";
import { HistoryProvider } from "./Context/history-context";
import { WatchLaterProvider } from "./Context/watch-later-context";
import { PlayListModalProvider } from "./Context/playlist-modal-context";
import { PlayListsProvider } from "./Context/playlist-context";
import { CategoryProvider } from "./Context/category-context";
import { VideosProvider } from "./Context/video-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <CategoryProvider>
          <PlayListsProvider>
            <PlayListModalProvider>
              <WatchLaterProvider>
                <HistoryProvider>
                  <LikedProvider>
                    <UserProvider>
                      <ToastProvider>
                        <App />
                      </ToastProvider>
                    </UserProvider>
                  </LikedProvider>
                </HistoryProvider>
              </WatchLaterProvider>
            </PlayListModalProvider>
          </PlayListsProvider>
        </CategoryProvider>
      </VideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
