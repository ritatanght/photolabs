import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  const topicElements =
    Array.isArray(topics) &&
    topics.map((topic) => (
      <TopicListItem
        key={topic.id}
        {...topic}
        fetchPhotosByTopic={() => fetchPhotosByTopic(topic.id)}
      />
    ));
  return <div className="top-nav-bar__topic-list">{topicElements}</div>;
};

export default TopicList;
