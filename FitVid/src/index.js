import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { ToastProvider } from "./Context/toast-context";
import { UserProvider } from "./Context/user-context";
import { LikedProvider } from "./Context/liked-context";
import {HistoryProvider} from "./Context/history-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <HistoryProvider>
      <LikedProvider>
      <UserProvider>
        <ToastProvider>
          <Router>
            <App />
          </Router>
        </ToastProvider>
      </UserProvider>
    </LikedProvider>
    </HistoryProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
