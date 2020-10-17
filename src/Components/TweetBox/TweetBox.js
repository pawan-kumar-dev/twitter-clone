import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../../DataLayer/StateProvider";
import db from "../../Config/firebase";
const TweetBox = () => {
  const [{ user }] = useStateValue();
  const [tweetMsg, setTweetMsg] = useState();
  const [tweetImg, setTweetImg] = useState();

  const sendTweet = e => {
    e.preventDefault();
    if (tweetMsg) {
      db.collection("posts").add({
        displayName: user?.displayName,
        username: user?.email.split("@")[0],
        verified: false,
        text: tweetMsg,
        image: tweetImg ? tweetImg : "",
        avatar: user?.photoURL
      });
    }
    setTweetMsg("");
    setTweetImg("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user?.photoURL} alt="user" />
          <input
            type="text"
            value={tweetMsg}
            onChange={e => setTweetMsg(e.target.value)}
            placeholder="What's Happening...?"
          />
        </div>
        <input
          type="text"
          value={tweetImg}
          onChange={e => setTweetImg(e.target.value)}
          placeholder="Optional: Enter Image Url"
          className="tweetBox__inputImage"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
