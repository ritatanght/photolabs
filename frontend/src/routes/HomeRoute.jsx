import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { favPhotos, addFavPhoto, removeFavPhoto, setModal } = props;

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={Object.keys(favPhotos).length > 0} />
      <PhotoList
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        setModal={setModal}
      />
    </div>
  );
};

export default HomeRoute;
