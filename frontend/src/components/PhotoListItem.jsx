import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photo, isFav, setModalPhoto, addFavPhoto, removeFavPhoto } = props;
  const {
    id,
    location: { city, country },
    urls: { regular },
    user: { name, profile },
  } = photo;

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        handleFavButtonClick={() =>
          isFav ? removeFavPhoto(id) : addFavPhoto(id)
        }
        selected={isFav}
      />
      <img
        src={regular}
        className="photo-list__image"
        // only have an onClick handler when setModalPhoto is in props (on home route)
        onClick={() => !!setModalPhoto && setModalPhoto(photo)}
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
