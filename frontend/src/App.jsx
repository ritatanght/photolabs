import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData, { ACTIONS } from "./hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const {
    state: { photoData, topicData, favPhotos, modalPhoto },
    dispatch,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        favPhotos={favPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        setModalPhoto={(photo) =>
          dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo })
        }
        addFavPhoto={(photoId) =>
          dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId })
        }
        removeFavPhoto={(photoId) =>
          dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId })
        }
      />
      {modalPhoto && (
        <PhotoDetailsModal
          photo={modalPhoto}
          onClosePhotoDetailsModal={() =>
            dispatch({ type: ACTIONS.SELECT_PHOTO })
          }
          favPhotos={favPhotos}
          addFavPhoto={(photoId) =>
            dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId })
          }
          removeFavPhoto={(photoId) =>
            dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId })
          }
        />
      )}
    </div>
  );
};

export default App;
