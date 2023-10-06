import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const reducer = (state, action) => {
  switch (action.type) {
  case "FAV_PHOTO_ADDED":
    if (!state.favPhotos.includes(action.payload)) {
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    }
    return state;

  case "FAV_PHOTO_REMOVED":
    const index = state.favPhotos.indexOf(action.payload);
    if (index >= 0) {
      return { ...state, favPhotos: state.favPhotos.splice(index, 1) };
    }

   return state;
  // case "FAV_PHOTO_TOGGLE":
  //   console.log(state);
  //   if (!state.favPhotos.includes(action.payload)) {
  //     return { ...state, favPhotos: [...state.favPhotos, action.payload] };
  //   } else {
  //     console.log(index)
  //     const index = state.favPhotos.indexOf(action.payload);
  //     if (index >= 0) {
  //       return { ...state, favPhotos: state.favPhotos.splice(index, 1) };
  //     }
  //   }
  //   return state;

  case "SET_PHOTO_DATA":
    return { ...state, photoData: action.payload };

  case "SET_TOPIC_DATA":
    return { ...state, topicData: action.payload };

  case "SELECT_PHOTO":
    if (action.payload) {
      return { ...state, modalPhoto: action.payload };
    }
    return { ...state, modalPhoto: null };

  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  // const [modalPhoto, setModalPhoto] = useState(null); // modal with a photo key will show the photo
  // const [favPhotos, setFavPhotos] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    favPhotos: [],
    modalPhoto: null,
    photoData: null,
    topicData: null,
  });

  // // Include the photo in favPhotos when it is favorited
  // const addFavPhoto = (photoId) => {
  //   setFavPhotos((prev) => {
  //     if (!prev.includes(photoId)) {
  //       return [...prev, photoId];
  //     }
  //   });
  // };

  // // Remove a photo from favPhotos when it is unfavorited
  // const removeFavPhoto = (photoId) => {
  //   setFavPhotos((prev) => {
  //     const index = prev.indexOf(photoId);
  //     return index >= 0 ? prev.splice(index, 1) : prev;
  //   });
  // };

  // const handleFavButtonClick = (photoId) => {
  //   // Run addFavPhoto to include the current photo when it is clicked if it's not yet in favPhotos
  //   // Otherwise, run the removeFavPhoto to remove the current photo from favorited photos
  //   favPhotos.includes(photoId)
  //     ? removeFavPhoto(photoId)
  //     : addFavPhoto(photoId);
  // };

  // const onClosePhotoDetailsModal = () => {
  //   setModalPhoto(null);
  // };

  return {
    // state: { modalPhoto, favPhotos },
    // setModalPhoto,
    // handleFavButtonClick,
    // onClosePhotoDetailsModal,
    state,
    dispatch,
  };
};

export default useApplicationData;
