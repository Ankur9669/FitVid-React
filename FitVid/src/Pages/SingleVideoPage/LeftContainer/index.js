import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { useToast } from "../../../Context/toast-context";
import { addToLikedVideos } from "../../../Util/add-to-liked";
import { removeFromLikedVideos } from "../../../Util/remove-from-liked";
import { findIfVideoExistsInArray } from "../../../Util/find-if-video-exists-in-array";
import { useLiked } from "../../../Context/liked-context";
import { usePlayLists } from "../../PlayList";
import { useUser } from "../../Authentication";
import { useModal } from "../../../Context/playlist-modal-context";

export {
  useNavigate,
  useParams,
  Axios,
  useToast,
  addToLikedVideos,
  removeFromLikedVideos,
  findIfVideoExistsInArray,
  useLiked,
  usePlayLists,
  useUser,
  useModal,
};
