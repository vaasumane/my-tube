import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const response = await data.json();
    setVideoList(response?.items);
  };
  if (videoList.length === 0) return null;
  return (
    <>
      <div className="flex flex-wrap justify-center" >
        {videoList.length > 0 &&
          videoList.map((video) =><VideoCard key={video.id} info={video} videoId={video.id} /> )}
      </div>
    </>
  );
};

export default VideoList;
