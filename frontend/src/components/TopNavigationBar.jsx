import React from "react";
import TopicList from "components/TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, fetchPhotosByTopic, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
