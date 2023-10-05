import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photo, favPhotos, addFavPhoto, removeFavPhoto, setModal } = props;
  const {
    id,
    location: { city, country },
    urls: { regular },
    user: { name, profile },
  } = photo;

  const handleFavButtonClick = (photoObj) => {
    // Run addFavPhoto to include the current photo when it is clicked if it's not yet in favPhotos
    // Otherwise, run the removeFavPhoto to remove the current photo from favorited photos
    favPhotos[id] ? removeFavPhoto(photoObj) : addFavPhoto(photoObj);

  };
  return (
    <li className="photo-list__item">
      <PhotoFavButton
        handleFavButtonClick={() => handleFavButtonClick(props.photo)}
        selected={!!favPhotos[id]}
      />
      <img
        src={regular}
        className="photo-list__image"
        onClick={() => setModal({ isOpen: true, photo: props.photo })}
      />
      <footer className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{name}</span>
          <br />
          <span className="photo-list__user-location">
            {`${city}, ${country}`}
          </span>
        </div>
      </footer>
    </li>
  );
};

export default PhotoListItem;
