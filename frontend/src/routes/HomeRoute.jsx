import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photosData from "../mocks/photos";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.favPhotos.length > 0} />
      <PhotoList photos={photosData} {...props} />
    </div>
  );
};

export default HomeRoute;
