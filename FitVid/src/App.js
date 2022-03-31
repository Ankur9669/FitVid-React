import "./App.css";

import Homepage from "./Pages/HomePage/Homepage";
import { Routes, Route } from "react-router-dom";
import VideoListing from "./Pages/HomePage/VideoListing/VideoListing";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} index></Route>
        <Route path="videos" element={<VideoListing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
