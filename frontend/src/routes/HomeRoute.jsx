import React, { useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  const [favPhotos, setFavPhotos] = useState({});

  // Include the photo in favPhotos when it is favorited
  const addFavPhoto = (photo) => {
    setFavPhotos((prev) => ({ ...prev, [photo.id]: { photo } }));
  };

  // Remove a photo from favPhotos when it is unfavorited
  const removeFavPhoto = (photo) => {
    setFavPhotos((prev) => {
      const { [photo.id]: removed, ...remain } = prev;
      return remain;
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={Object.keys(favPhotos).length > 0} />
      <PhotoList addFavPhoto={addFavPhoto} removeFavPhoto={removeFavPhoto} />
    </div>
  );
};

export default HomeRoute;
