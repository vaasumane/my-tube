import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, json, useSearchParams } from "react-router-dom";
import { closeMenu } from "../Utils/appSlice";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_CHANNEL_URL,
  YOUTUBE_COMMENT_URL,
  YOUTUBE_VIDEO_DETAIL_URL,
} from "../Utils/constant";
import { dateFormat, formatNumber } from "../Utils/helper";
import VideooComments from "./VideooComments";
import LiveMessages from "./LiveMessages";
import WatchShimmer from "./WatchShimmer";
import RelatedVideoList from "./RelatedVideoList";
import ChannelProfile from "./ChannelProfile";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showShimmer, setShowShimmer] = useState(true);
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);
  const toggleDescription = () => {
    const description = document.querySelector(".line-clamp-2");
    description.classList.toggle("line-clamp-none");
    setShowMore(!showMore);
  };
  const getVideoDetails = async () => {
    const data = await fetch(
      `${YOUTUBE_VIDEO_DETAIL_URL}id=${videoId}&key=${YOUTUBE_API_KEY}`
    );
    const videoData = await data.json();
    setShowShimmer(false);
    if (videoData?.items?.[0]?.snippet?.channelId) {
      getChannelDetails(videoData?.items?.[0]?.snippet?.channelId);
    }
    setVideoDetails(videoData?.items);
  };
  const getChannelDetails = async (channel_id) => {
    const data = await fetch(
      `${YOUTUBE_CHANNEL_URL}id=${channel_id}&key=${YOUTUBE_API_KEY}`
    );
    const channelData = await data.json();
    setChannelDetails(channelData?.items);
  };

  return (
    <>

      {showShimmer ? (
        <WatchShimmer />
      ) : (
        <div className="col-span-11 p-5 lg:m-2 w-full">
          <div className="lg:flex justify-between">
            <div className="lg:w-2/3 ">
              <iframe
                src={"https://www.youtube.com/embed/" + videoId}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl mx-auto xl:w-[900px] md:w-[700px] md:h-[500px] iframe-video"
              ></iframe>

              <div className="py-5 mx-auto">
                <h1 className="text-2xl font-bold break-words">
                  {videoDetails?.[0]?.snippet?.title}
                </h1>
                <div className="md:flex items-center justify-between py-3">
                  <div className="flex gap-3 my-3">
                    <div className="h-14 w-14">
                      <NavLink
                        to={`/channel/${videoDetails?.[0]?.snippet?.channelId}`}
                        className="h-8 w-8"
                      >
                        <ChannelProfile
                          channel_id={videoDetails?.[0]?.snippet?.channelId}
                        />
                      </NavLink>
                    </div>
                    {/* <img
                      className="rounded-full h-14 w-14 object-cover"
                      alt="channel-image"
                      src={
                        channelDetails?.[0]?.snippet?.thumbnails?.medium?.url
                      }
                    /> */}
                    <div>
                      <h2 className="font-semibold">
                        {channelDetails?.[0]?.snippet?.title}
                      </h2>
                      <span>
                        {channelDetails?.[0]?.statistics?.subscriberCount
                          ? formatNumber(
                              channelDetails?.[0]?.statistics?.subscriberCount
                            )
                          : ""}
                      </span>
                    </div>
                    <div className="mx-3">
                      <button className="bg-black rounded-3xl text-white p-2 px-3">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <div className="flex">
                      <button className="rounded-l-3xl hover:bg-gray-200 bg-gray-100 p-2 px-3 flex items-center gap-2 border-r-2">
                        <img src="./like.png" className="h-4 w-4" />
                        {videoDetails?.[0]?.statistics?.likeCount
                          ? formatNumber(
                              videoDetails?.[0]?.statistics?.likeCount
                            )
                          : ""}
                      </button>
                      <button className="rounded-r-3xl hover:bg-gray-200 bg-gray-100 p-2 px-3">
                        <img src="./dislike.png" className="h-4 w-4 " />
                      </button>
                    </div>
                    <button className=" rounded-3xl  p-2 hover:bg-gray-200 bg-gray-100 flex items-center gap-2">
                      <img src="./share.png" className="h-4 w-4 " />
                      Share
                    </button>
                    <button className=" rounded-3xl  px-2 py-1 hover:bg-gray-200 bg-gray-100 flex items-center gap-1">
                      <img src="./download.png" className="h-8 w-8 " />
                      Download
                    </button>
                    <button className=" rounded-full  p-3 hover:bg-gray-200 bg-gray-100">
                      <img src="./more.png" className="h-4 w-4 " />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-100 py-2 my-3 rounded-md p-2 ">
                  <p className="font-semibold">
                    <span>
                      {new Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                      }).format(videoDetails?.[0]?.statistics?.viewCount)}{" "}
                      views
                    </span>
                    <span className="mx-3">
                      {dateFormat(videoDetails?.[0]?.snippet?.publishedAt)}
                    </span>
                  </p>
                  <div className="overflow-hidden">
                    <div className="line-clamp-2">
                      {videoDetails?.[0]?.snippet?.description
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
              <div className="hidden lg:block ">
                <VideooComments videoId={videoId} />
              </div>
            </div>
            <div className={ "w-full" + isMenuOpenStatus ? "lg:w-1/4" : "lg:w-1/3"}>
              {/* <LiveMessages />
               */}
              <RelatedVideoList VideoCategoryID="24" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WatchPage;
