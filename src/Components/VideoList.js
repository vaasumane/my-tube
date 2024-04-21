import React, { useEffect, useState } from "react";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_VIDEO_SEARCH_URL,
  YOUTUBE_VIDEO_URL,
} from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const [intialVideoList, setIntialVideoList] = useState([]);
  const [OldVideos, setOldVideos] = useState([]);
  const getSearchText = useSelector((store) => store.search.searchText);
  console.log(getSearchText);
  useEffect(() => {
    if (getSearchText && getSearchText.trim() !== "" && getSearchText !== undefined) {
      getSearchVideoList();
    } else {
      getVideoList();
    }
  }, [getSearchText]);

  const getVideoList = async () => {
      const data = await fetch(YOUTUBE_VIDEO_URL);
      const response = await data.json();
      setVideoList(response?.items);
      setOldVideos(response?.items);
  };
  const getSearchVideoList = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_SEARCH_URL + `q=${getSearchText}&key=${YOUTUBE_API_KEY}`
    );
    const response = await data.json();
    setVideoList(response?.items);
  };
  if (videoList.length === 0) return <Shimmer />;
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {videoList.length > 0 &&
          videoList.map((video,index) => (
            <VideoCard key={video.id+index} info={video} videoId={typeof video.id === "object" ? video.id.videoId : video.id} />
          ))}
      </div>
    </>
  );
};

export default VideoList;
