import { useEffect, useReducer } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

const reducer = (state, action) => {
  switch (action.type) {
  case "FAV_PHOTO_ADDED": {
    const { favPhotos } = state;
    // include the photo in favPhoto only when the current photo is not in favPhoto
    if (!favPhotos.includes(action.payload)) {
      return { ...state, favPhotos: [...favPhotos, action.payload] };
    }
    return state;
  }

  case "FAV_PHOTO_REMOVED": {
    const { favPhotos } = state;
    // look for the index for the current photo
    const index = favPhotos.indexOf(action.payload);
    if (index >= 0) {
      return { ...state, favPhotos: favPhotos.splice(index, 1) };
    }
    return state;
  }

  // both actions set fetched data to photoData for display
  case "SET_PHOTO_DATA":
  case "GET_PHOTOS_BY_TOPICS":
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
  const [state, dispatch] = useReducer(reducer, {
    modalPhoto: null, // photoObj || null
    favPhotos: [], // photoId[]
    photoData: [], // photoObj[]
    topicData: [], // topicObj[]
  });

  // take care of the data fetching of photos and topics upon initial render of app
  useEffect(() => {
    const photoPromise = axios.get("/api/photos");
    const topicPromise = axios.get("/api/topics");

    // set the returned data to photoData and topic data in reducer
    Promise.all([photoPromise, topicPromise])
      .then(([photoRes, topicRes]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoRes.data });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicRes.data });
      })
      .catch((error) => console.log(error));
  }, []);

  const addFavPhoto = (photoId) => {
    const validPhoto = state.photoData.some((photo) => photo.id === photoId);
    if (validPhoto)
      return dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  const removeFavPhoto = (photoId) =>
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });

  // call the corresponding functions depending on whether the current photo has been favorited
  const toggleFavPhoto = (isFavorited, photoId) =>
    isFavorited ? removeFavPhoto(photoId) : addFavPhoto(photoId);

  const setModalPhoto = (photo) =>
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });

  // set modalPhoto to null when modal is closed
  const onClosePhotoDetailsModal = () =>
    dispatch({ type: ACTIONS.SELECT_PHOTO });

  /**
   * Takes in topic id, fetch the photos with the topic id and set the returned data to photoData in reducer
   * @param {string} topicId
   */
  const fetchPhotosByTopic = (topicId) => {
    return axios
      .get(`/api/topics/photos/${topicId}`)
      .then(({ data }) =>
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
      )
      .catch((error) => console.log(error));
  };

  return {
    state,
    toggleFavPhoto,
    setModalPhoto,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;
