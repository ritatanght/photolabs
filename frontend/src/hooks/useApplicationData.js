import { useEffect, useReducer } from "react";

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
    // include the photo in favPhoto only when the current photo is not in favPhoto
    if (!state.favPhotos.includes(action.payload)) {
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    }
    return state;

  case "FAV_PHOTO_REMOVED": {
    // look for the index for the current photo
    const index = state.favPhotos.indexOf(action.payload);
    if (index >= 0) {
      return { ...state, favPhotos: state.favPhotos.splice(index, 1) };
    }
    return state;
  }

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
  const [state, dispatch] = useReducer(reducer, {
    favPhotos: [],
    modalPhoto: null,
    photoData: [],
    topicData: [],
  });

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
