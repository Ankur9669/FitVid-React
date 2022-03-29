import "./App.css";

import Homepage from "./Pages/HomePage/Homepage";
import { Routes, Route } from "react-router-dom";
import VideoListing from "./Pages/HomePage/VideoListing/VideoListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="homepage" element={<Homepage />} index></Route>
        <Route path="videos" element={<VideoListing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
