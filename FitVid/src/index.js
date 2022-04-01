import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { ToastProvider } from "./Context/toast-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <Router>
        <App />
      </Router>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
