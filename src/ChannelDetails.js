import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_URL, YOUTUBE_VIDEO_SEARCH_URL } from "./Utils/constant";
import { Videostatistics, formatNumber, formatSubscriberCount } from "./Utils/helper";
import Shimmer from "./Components/Shimmer";
import VideoCard from "./Components/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./Utils/appSlice";

const ChannelDetails = () => {
  const { channel_id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [ChannelVideos, setChannelVideos] = useState([]);
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);
const dispatch = useDispatch();

  useEffect(() => {
    getChannelDetails();
    getChannelVideos();
    dispatch(toggleMenu());
  }, []);
  const toggleDescription = () => {
    const description = document.querySelector(".line-clamp-2");
    description.classList.toggle("line-clamp-none");
    setShowMore(!showMore);
  };
  const getChannelDetails = async () => {
    const data = await fetch(
      `${YOUTUBE_CHANNEL_URL}id=${channel_id}&key=${YOUTUBE_API_KEY}`
    );
    const channelData = await data.json();
    setChannelDetails(channelData?.items);
  };
  const getChannelVideos = async () => {
    const data = await fetch(
      `${YOUTUBE_VIDEO_SEARCH_URL}channelId=${channel_id}&key=${YOUTUBE_API_KEY}`
    );
    const channelVideoData = await data.json();
    setChannelVideos(channelVideoData.items);
  };
  const GetPlaylists = async () => {
    const data = await fetch(
      `${YOUTUBE_VIDEO_SEARCH_URL}channelId=${channel_id}&key=${YOUTUBE_API_KEY}`
    );
    const channelVideoData = await data.json();
    setChannelVideos(channelVideoData.items);
  };

  if (channelDetails.length === 0) return <Shimmer />;

  return (
    <>
      <div className={"col-span-11 w-full" + (isMenuOpenStatus ? " lg:w-5/6" : " lg:w-full ")}>
      <div className="flex w-full p-3">
        <div className="w-1/2 lg:w-3/12">
          <img
            alt="channel-image"
            className="rounded-full h-44 w-44"
            src={channelDetails?.[0]?.snippet?.thumbnails?.medium?.url}
          />
        </div>
        <div className=" w-1/2 lg:w-9/12">
          <h1 className="text-4xl font-bold py-2">
            {channelDetails?.[0]?.snippet?.title}
          </h1>
          <span className="font-semibold">{channelDetails?.[0]?.snippet?.customUrl}</span> |
          <span className="ml-2 font-semibold">
            {formatSubscriberCount(
              channelDetails?.[0]?.statistics?.subscriberCount
            )}{" "}
            subscribers
          </span>

          <div className="overflow-hidden py-2">
            <div className="line-clamp-2">
              {channelDetails?.[0]?.snippet?.description
                .split(/\r\n|\r|\n/)
                .map((t, index) => {
                  return <p key={index + "des"}>{t}</p>;
                })}
            </div>
            <button
              onClick={toggleDescription}
              className="text-blue-500  mt-2 focus:outline-none"
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center border-t-2 py-4" id="video-list">
        {ChannelVideos.length > 0 &&
          ChannelVideos.map((video, index) => (
           
            <VideoCard
              key={video.id + index}
              info={video}
              videoId={
                typeof video.id === "object" ? video.id.videoId : video.id
              }
            />
          ))}
      </div>
      </div>
    </>
  );
};

export default ChannelDetails;
