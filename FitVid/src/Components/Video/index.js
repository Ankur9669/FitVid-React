import ReactPlayer from "react-player/lazy";
import { useLiked } from "../../Context/liked-context";
import { findIfVideoExistsInArray } from "../../Util/find-if-video-exists-in-array";
import { addToLikedVideos } from "../../Util/add-to-liked";
import { addToHistoryVideos } from "../../Util/add-to-history";
import { removeFromHistoryVideos } from "../../Util/remove-from-history";
import { removeFromLikedVideos } from "../../Util/remove-from-liked";
import { useToast } from "../../Context/toast-context";
import { useUser } from "../../Context/user-context";
import { useNavigate } from "react-router-dom";
import { useHistory } from "../../Context/history-context";

export {
  ReactPlayer,
  useLiked,
  findIfVideoExistsInArray,
  addToLikedVideos,
  addToHistoryVideos,
  removeFromHistoryVideos,
  removeFromLikedVideos,
  useToast,
  useUser,
  useHistory,
  useNavigate,
};
