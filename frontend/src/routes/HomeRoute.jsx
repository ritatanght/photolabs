import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.favPhotos.length > 0} />
      <PhotoList {...props} />
    </div>
  );
};

export default HomeRoute;
