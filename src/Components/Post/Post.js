import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    const [liked, setLiked] = useState(false);
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} alt="user" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDesc">
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt="post_img" />}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            {liked ? (
              <FavoriteIcon
                onClick={() => setLiked(!liked)}
                fontSize="small"
                className="post__liked"
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => setLiked(!liked)}
                fontSize="small"
              />
            )}
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
