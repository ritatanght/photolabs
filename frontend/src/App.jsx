import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';

import "./App.scss";

const App = () => {
  const {
    state: { favPhotos, modalPhoto },
    setModalPhoto,
    onClosePhotoDetailsModal,
    handleFavButtonClick,

  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        setModalPhoto={setModalPhoto}
        favPhotos={favPhotos}
        handleFavButtonClick={handleFavButtonClick}
      />
      {modalPhoto && (
        <PhotoDetailsModal
          photo={modalPhoto}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          favPhotos={favPhotos}
          handleFavButtonClick={handleFavButtonClick}
        />
      )}
    </div>
  );
};

export default App;
