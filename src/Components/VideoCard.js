import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Videostatistics,
  convertDuration,
  formatNumber,
  timeAgo,
} from "../Utils/helper";
import ChannelProfile from "./ChannelProfile";

const VideoCard = ({ info, videoId }) => {
  const [videoData, setVideoData] = useState([]);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt, channelId } = snippet;
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);
  

  return (
    <>
      {videoId !== undefined && (
        <div
          className={
            "p-2 h-auto" +
            (isMenuOpenStatus ? " w-80 lg:w-[280px]" : " w-80 lg:w-[280px]")
          }
          key={videoId}
        >
          <div className="relative">
            <Link to={"/watch?v=" + videoId}>
              <img
                className="rounded-lg "
                alt="video-thumbnail"
                src={thumbnails.high.url}
              />

              <span className="absolute right-1 bottom-2 text-white p-1 bg-black rounded-md text-xs">
                {info?.contentDetails
                  ? convertDuration(info?.contentDetails?.duration)
                  : ""}
              </span>
            </Link>
          </div>
          <div className="py-2">
            <Link to={"/watch?v=" + videoId}>
              <h1 className="font-bold line-clamp-2" title={title}>
                {title}
              </h1>
            </Link>
            <div className="flex items-center gap-2">
              <Link to={`channel/${channelId}`}>
                {/* <ChannelProfile channel_id={channelId} /> */}
                <h2>{channelTitle}</h2>
              </Link>
            </div>
            {statistics && (
              <p>
                {formatNumber(statistics?.viewCount)} views |{" "}
                {timeAgo(publishedAt)}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
