import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = () => {
  const photoElements = photos.map((photo) => (
    <PhotoListItem key={photo.id} {...photo} />
  ));
  return <ul className="photo-list">{photoElements}</ul>;
};

export default PhotoList;
