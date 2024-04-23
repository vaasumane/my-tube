import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { convertDuration, formatNumber, timeAgo } from "../Utils/helper";

const VideoCard = ({ info, videoId }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {/* <div className={"p-2 h-auto" + (isMenuOpenStatus ? " w-80 lg:w-96" : " w-80 lg:w-72")} key={videoId}> */}
      <div
        className={
          "p-2 h-auto" + (isMenuOpenStatus ? " w-80 lg:w-72" : " w-80 lg:w-72")
        }
        key={videoId}
      >
        <Link to={"watch?v=" + videoId}>
          <div className="relative">
            <img
              className="rounded-lg "
              alt="video-thumbnail"
              src={thumbnails.high.url}
            />
            <span className="absolute right-1 bottom-2 text-white p-1 bg-black rounded-md text-xs">
              {convertDuration(info?.contentDetails?.duration)}
            </span>
          </div>
          <div className="py-2">
            <h1 className="font-bold">{title}</h1>
            <h2>{channelTitle}</h2>
            {statistics && (
              <p>
                {formatNumber(statistics?.viewCount)} views |{" "}
                {timeAgo(publishedAt)}
              </p>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
