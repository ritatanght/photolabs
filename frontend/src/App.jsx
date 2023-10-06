import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';

import "./App.scss";

const App = () => {
  const {
    // state: { favPhotos, modalPhoto },
    // setModalPhoto,
    // onClosePhotoDetailsModal,
    // handleFavButtonClick,
    state: { favPhotos, modalPhoto },
    dispatch,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        setModalPhoto={(photo) =>
          dispatch({ type: "SELECT_PHOTO", payload: photo })
        }
        favPhotos={favPhotos}
        //handleFavButtonClick={handleFavButtonClick}
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
          //handleFavButtonClick={handleFavButtonClick}
        />
      )}
    </div>
  );
};

export default App;
