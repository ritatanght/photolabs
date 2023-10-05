import React from "react";
import PhotoListItem from "./PhotoListItem";
import photosData from "../mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photos = props.photos || photosData;
  const photoElements = photos.map((photo) => (
    <PhotoListItem key={photo.id} photo={photo} {...props} />
  ));
  return <ul className="photo-list">{photoElements}</ul>;
};

export default PhotoList;
