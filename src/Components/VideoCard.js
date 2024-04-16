import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatNumber, timeAgo } from "../Utils/helper";

const VideoCard = ({ info,videoId }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);

  
  return (
    <>
      <div className={"p-2 h-auto" + (isMenuOpenStatus ? " w-64" : " w-60")}>

      <Link to={"watch?v="+videoId} >
        <img
          className="rounded-lg "
          alt="video-thumbnail"
          src={thumbnails.medium.url}
        />
        <div className="py-2">
          <h1 className="font-bold">{title}</h1>
          <h2>{channelTitle}</h2>
          <p>
            {formatNumber(statistics.viewCount)} views | {timeAgo(publishedAt)}
          </p>
        </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
