import ReactPlayer from "react-player/lazy";
import { useLiked } from "../../Context/liked-context";
import { useHistory } from "../../Context/history-context";
import { useWatchLater } from "../../Context/watch-later-context";
import { findIfVideoExistsInArray } from "../../Util/find-if-video-exists-in-array";
import { addToLikedVideos } from "../../Util/add-to-liked";
import { addToHistoryVideos } from "../../Util/add-to-history";
import { removeFromHistoryVideos } from "../../Util/remove-from-history";
import { removeFromLikedVideos } from "../../Util/remove-from-liked";
import { addToWatchLaterVideos } from "../../Util/add-to-watch-later";
import { removeFromWatchLaterVideos } from "../../Util/remove-from-watch-later";
import { useToast } from "../../Context/toast-context";
import { useUser } from "../../Context/user-context";
import { useNavigate } from "react-router-dom";
import { useHistory } from "../../Context/history-context";


export {
  ReactPlayer,
  useLiked,
  useHistory,
  useWatchLater,
  findIfVideoExistsInArray,
  addToLikedVideos,
  addToHistoryVideos,
  removeFromHistoryVideos,
  removeFromLikedVideos,
  addToWatchLaterVideos,
  removeFromWatchLaterVideos,
  useToast,
  useUser,
  useHistory,
  useNavigate,
};
