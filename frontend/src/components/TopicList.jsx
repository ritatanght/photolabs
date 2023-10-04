import React from "react";
import topics from "../mocks/topics";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = () => {
  const topicElements = topics.map((topic) => (
    <TopicListItem key={topic.id} {...topic} />
  ));
  return <div className="top-nav-bar__topic-list">{topicElements}</div>;
};

export default TopicList;
