import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Videostatistics, convertDuration, formatNumber, timeAgo } from "../Utils/helper";
import ChannelProfile from "./ChannelProfile";

const VideoCard = ({ info, videoId }) => {
  const [videoData,setVideoData] = useState([]);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt,channelId } = snippet;
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);
  // useEffect(()=>{
  //   getVideoDetails();
  // },[]);
  // const getVideoDetails = async ()=>{
  //   if(videoId !== undefined){
  //     const VideoData = await Videostatistics(videoId);
  //     if(videoData !== null ){
  //       setVideoData(videoData);
  //     }
  //   }  

  // }

  return (
    <>
      {/* <div className={"p-2 h-auto" + (isMenuOpenStatus ? " w-80 lg:w-96" : " w-80 lg:w-72")} key={videoId}> */}
      {videoId !== undefined && 
      <div
        className={
          "p-2 h-auto" +
          (isMenuOpenStatus ? " w-80 lg:w-[280px]" : " w-80 lg:w-[280px]")
        }
        key={videoId}
      >
        <Link to={"/watch?v=" + videoId}>
          <div className="relative">
            <img
              className="rounded-lg "
              alt="video-thumbnail"
              src={thumbnails.high.url}
            />
            <span className="absolute right-1 bottom-2 text-white p-1 bg-black rounded-md text-xs">
              {info?.contentDetails ? convertDuration(info?.contentDetails?.duration) : "" }
              {/* {convertDuration(info?.contentDetails?.duration)} */}
            </span>
          </div>
          <div className="py-2">
            <h1 className="font-bold line-clamp-2" title={title}>{title}</h1>
            <div className="flex items-center gap-2">
              <Link to={`channel/${channelId}`}  >
                {/* <ChannelProfile channel_id={channelId} /> */}
              <h2>{channelTitle}</h2>
              </Link >
            </div>
            {statistics && (
              <p>
                {formatNumber(statistics?.viewCount)} views |{" "}
                {timeAgo(publishedAt)}
              </p>
            )}
          </div>
        </Link>
      </div>
      } 
    </>
  );
};

export default VideoCard;
