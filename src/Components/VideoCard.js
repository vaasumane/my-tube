import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ info,videoId }) => {
  const { snippet, statistics } = info;
  console.log(snippet);
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);

  function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + " B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + " M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }
  function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
        return interval + " year" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " month" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " day" + (interval === 1 ? "" : "s") + " ago";
    }
    return "less than a day ago";
}
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
