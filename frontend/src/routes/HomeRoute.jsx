import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, fetchPhotosByTopic, isModalOpen, ...otherProps } = props;
  return (
    <div className={`home-route ${isModalOpen ? "disabled" : ""}`}>
      <TopNavigationBar
        topics={topics}
        fetchPhotosByTopic={fetchPhotosByTopic}
        isFavPhotoExist={props.favPhotos.length > 0}
      />
      <PhotoList {...otherProps} />
    </div>
  );
};

export default HomeRoute;
