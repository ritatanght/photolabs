import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    location: { city, country },
    urls: { regular },
    user: { name, profile },
  } = props;

  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <img src={regular} className="photo-list__image" />
      <footer className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{name}</span>
          <br />
          <span className="photo-list__user-location">
            {" "}
            {`${city}, ${country}`}
          </span>
        </div>
      </footer>
    </li>
  );
};

export default PhotoListItem;
