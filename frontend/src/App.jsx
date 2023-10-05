import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import "./App.scss";

const App = () => {
  const [modal, setModal] = useState({ isOpen: false });
  const [favPhotos, setFavPhotos] = useState({});

  // Include the photo in favPhotos when it is favorited
  const addFavPhoto = (photo) => {
    setFavPhotos((prev) => ({ ...prev, [photo.id]: { photo } }));
  };

  // Remove a photo from favPhotos when it is unfavorited
  const removeFavPhoto = (photo) => {
    setFavPhotos((prev) => {
      const { [photo.id]: removed, ...remain } = prev;
      return remain;
    });
  };

  return (
    <div className="App">
      <HomeRoute
        setModal={setModal}
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
      />
      {modal.isOpen && (
        <PhotoDetailsModal
          photo={modal.photo}
          setModal={setModal}
          favPhotos={favPhotos}
          addFavPhoto={addFavPhoto}
          removeFavPhoto={removeFavPhoto}
        />
      )}
    </div>
  );
};

export default App;
