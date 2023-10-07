import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import photos from "./mocks/photos";

import "./App.scss";

const App = () => {
  const {
    state: { favPhotos, modalPhoto },
    dispatch,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        setModalPhoto={(photo) =>
          dispatch({ type: "SELECT_PHOTO", payload: photo })
        }
        favPhotos={favPhotos}
        addFavPhoto={(photoId) =>
          dispatch({ type: "FAV_PHOTO_ADDED", payload: photoId })
        }
        removeFavPhoto={(photoId) =>
          dispatch({ type: "FAV_PHOTO_REMOVED", payload: photoId })
        }
      />
      {modalPhoto && (
        <PhotoDetailsModal
          photo={modalPhoto}
          onClosePhotoDetailsModal={() => dispatch({ type: "SELECT_PHOTO" })}
          favPhotos={favPhotos}
          addFavPhoto={(photoId) =>
            dispatch({ type: "FAV_PHOTO_ADDED", payload: photoId })
          }
          removeFavPhoto={(photoId) =>
            dispatch({ type: "FAV_PHOTO_REMOVED", payload: photoId })
          }
        />
      )}
    </div>
  );
};

export default App;
