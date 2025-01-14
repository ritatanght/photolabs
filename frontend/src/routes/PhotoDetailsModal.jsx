import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const {
    photo,
    favPhotos,
    toggleFavPhoto,
    onClosePhotoDetailsModal,
  } = props;
  const {
    id,
    location: { city, country },
    urls: { full },
    user: { name, profile },
    similar_photos,
  } = photo;

  const isFav = favPhotos.includes(id);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClosePhotoDetailsModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Container for main large image */}
      <section className="photo-details-modal__images">
        <PhotoFavButton
          handleFavButtonClick={() => toggleFavPhoto(isFav, id)}
          selected={!!isFav}
        />
        <img src={full} className="photo-details-modal__image" />

        <footer className="photo-details-modal__photographer-details">
          <img
            src={profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <span>{name}</span>
            <br />
            <span className="photo-details-modal__photographer-location">
              {`${city}, ${country}`}
            </span>
          </div>
        </footer>
      </section>
      {/* Section for similar photos */}
      <section className="photo-details-modal__images">
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <PhotoList
          photos={Object.values(similar_photos)}
          favPhotos={favPhotos}
          toggleFavPhoto={toggleFavPhoto}
        />
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
