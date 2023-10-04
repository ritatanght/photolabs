import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const [selected, setSelected] = useState(false);
  const {
    photo: {
      location: { city, country },
      urls: { regular },
      user: { name, profile },
    },
    addFavPhoto,
    removeFavPhoto,
  } = props;

  const handleFavButtonClick = (photoObj) => {
    // Run addFavPhoto to include the current photo when it is clicked but not yet selected
    // Otherwise, run the removeFavPhoto to remove the current photo from favorited photos
    selected ? removeFavPhoto(photoObj) : addFavPhoto(photoObj);

    // Toggle the favButton
    setSelected(!selected);
  };
  return (
    <li className="photo-list__item">
      <PhotoFavButton
        handleFavButtonClick={() => handleFavButtonClick(props.photo)}
        selected={selected}
      />
      <img src={regular} className="photo-list__image" />
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
