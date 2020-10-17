import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed
          tweetId={"1189966818640900096"}
          options={{ height: 350 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          noScrollbar
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
