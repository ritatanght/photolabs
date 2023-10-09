import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const {
    state: { photoData, topicData, favPhotos, modalPhoto },
    addFavPhoto,
    removeFavPhoto,
    setModalPhoto,
    fetchPhotosByTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        favPhotos={favPhotos}
        isModalOpen={!!modalPhoto}
        fetchPhotosByTopic={fetchPhotosByTopic}
        setModalPhoto={setModalPhoto}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
      />
      {modalPhoto && (
        <PhotoDetailsModal
          photo={modalPhoto}
          favPhotos={favPhotos}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          addFavPhoto={addFavPhoto}
          removeFavPhoto={removeFavPhoto}
        />
      )}
    </div>
  );
};

export default App;
