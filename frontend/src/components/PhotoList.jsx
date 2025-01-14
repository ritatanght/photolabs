import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favPhotos, ...otherProps } = props;

  const photoElements =
    Array.isArray(photos) &&
    photos.map((photo) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        isFav={!!favPhotos.includes(photo.id)}
        {...otherProps}
      />
    ));
  return <ul className="photo-list">{photoElements}</ul>;
};

export default PhotoList;
