import { useState } from "react";
const useApplicationData = () => {
  const [modalPhoto, setModalPhoto] = useState(null); // modal with a photo key will show the photo
  const [favPhotos, setFavPhotos] = useState([]);

  // Include the photo in favPhotos when it is favorited
  const addFavPhoto = (photoId) => {
    setFavPhotos((prev) => {
      if (!prev.includes(photoId)) {
        return [...prev, photoId];
      }
    });
  };

  // Remove a photo from favPhotos when it is unfavorited
  const removeFavPhoto = (photoId) => {
    setFavPhotos((prev) => {
      const index = prev.indexOf(photoId);
      return index >= 0 ? prev.splice(index, 1) : prev;
    });
  };

  const handleFavButtonClick = (photoId) => {
    // Run addFavPhoto to include the current photo when it is clicked if it's not yet in favPhotos
    // Otherwise, run the removeFavPhoto to remove the current photo from favorited photos
    favPhotos.includes(photoId)
      ? removeFavPhoto(photoId)
      : addFavPhoto(photoId);
  };

  const onClosePhotoDetailsModal = () => {
    setModalPhoto(null);
  };

  return {
    state: { modalPhoto, favPhotos },
    setModalPhoto,
    handleFavButtonClick,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
