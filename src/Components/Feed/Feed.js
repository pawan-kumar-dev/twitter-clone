import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../Config/firebase";
import { Button } from "@material-ui/core";
import FlipMove from "react-flip-move";
import { useStateValue } from "../../DataLayer/StateProvider";
import { actionType } from "../../DataLayer/reducer";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  const logout = () => {
    dispatch({
      type: actionType.SET_USER,
      user: null
    });
  };
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Twitter Clone Home</h2>
        <Button onClick={logout}>Logout</Button>
      </div>

      {/* Tweetbox */}
      <TweetBox />
      {/* Posts */}
      <FlipMove>
        {posts?.map(
          ({ avatar, displayName, verified, text, image, username }, index) => {
            return (
              <Post
                key={index}
                displayName={displayName}
                username={username}
                verified={verified}
                text={text}
                image={image}
                avatar={avatar}
              />
            );
          }
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;
