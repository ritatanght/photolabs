import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, fetchPhotosByTopic }) => {
  return (
    <div className="topic-list__item" onClick={fetchPhotosByTopic}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
