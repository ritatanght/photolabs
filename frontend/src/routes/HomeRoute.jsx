import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, ...otherProps } = props;
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={props.favPhotos.length > 0}
      />
      <PhotoList {...otherProps} />
    </div>
  );
};

export default HomeRoute;
