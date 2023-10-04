import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photoElements = photos.map((photo) => (
    <PhotoListItem key={photo.id} photo={photo} {...props} />
  ));
  return <ul className="photo-list">{photoElements}</ul>;
};

export default PhotoList;
