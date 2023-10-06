import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';

import "./App.scss";

const App = () => {
  const {
    state: { favPhotos, modalPhoto },
    setModalPhoto,
    handleFavButtonClick,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        setModal={setModalPhoto}
        favPhotos={favPhotos}
        handleFavButtonClick={handleFavButtonClick}
      />
      {modalPhoto && (
        <PhotoDetailsModal
          photo={modalPhoto}
          setModal={setModalPhoto}
          favPhotos={favPhotos}
          handleFavButtonClick={handleFavButtonClick}
        />
      )}
    </div>
  );
};

export default App;
