import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({topics}) => {
  const topicElements = topics.map((topic) => (
    <TopicListItem key={topic.id} {...topic} />
  ));
  return <div className="top-nav-bar__topic-list">{topicElements}</div>;
};

export default TopicList;
