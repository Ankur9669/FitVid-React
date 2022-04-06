import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  VideoListing,
  Login,
  SignUp,
  Toasts,
  LikedVideos,
  HistoryPage,
  WatchLater,
  PlayListModal,
  PlayLists,
  PlayList,
  SingleVideoPage,
} from "./Pages/index";
import SingleVideoPage from "./Pages/SingleVideoPage/SingleVideoPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Loader from "./Components/Loader/Loader";

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
        <Route path="playlists" element={<PlayLists />}></Route>
        <Route path="playlist/:playlistId" element={<PlayList />}></Route>
        <Route path="videos/:videoId" element={<SingleVideoPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="loading" element={<Loader />}></Route>

      </Routes>
    </div>
  );
}

export default App;
