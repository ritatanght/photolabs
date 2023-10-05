import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photosData from "../mocks/photos";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  //const { favPhotos, handleFavButtonClick, setModal } = props;

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.favPhotos.length > 0} />
      <PhotoList
        photos={photosData}
        // favPhotos={favPhotos}
        // addFavPhoto={addFavPhoto}
        // removeFavPhoto={removeFavPhoto}
        // setModal={setModal}
        // handleFavButtonClick={handleFavButtonClick}
        {...props}
      />
    </div>
  );
};

export default HomeRoute;
