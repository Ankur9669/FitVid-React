import "./App.css";

import Homepage from "./Pages/HomePage/Homepage";
import { Routes, Route } from "react-router-dom";
import VideoListing from "./Pages/VideoListing/VideoListing";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/Signup/SignUp";
import Toasts from "./Util/Toasts/Toasts";
import LikedVideos from "./Pages/LikedVideos/LikedVideos";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import WatchLater from "./Pages/WatchLater/WatchLater";
import PlayListModal from "./Components/PlayListModal/PlayListModal";

function App() {
  return (
    <div className="App">
      <Toasts />
      <PlayListModal />
      <Routes>
        <Route path="/" element={<Homepage />} index></Route>
        <Route path="videos" element={<VideoListing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="liked" element={<LikedVideos />}></Route>
        <Route path="history" element={<HistoryPage />}></Route>
        <Route path="watchlater" element={<WatchLater />}></Route>
        {/* <Route path="forgotpassword" element={<ForgotPassword />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
