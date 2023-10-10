import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    photo,
    isFav,
    setModalPhoto,
    toggleFavPhoto,
  } = props;
  const {
    id,
    location: { city, country },
    urls: { regular },
    user: { name, profile },
  } = photo;

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        handleFavButtonClick={() => toggleFavPhoto(isFav, id)
        }
        selected={isFav}
      />
      <img
        src={regular}
        // thumbnail should be clickable when the setModalPhoto func is passed down
        className={`photo-list__image ${setModalPhoto ? "clickable" : ""}`}
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
