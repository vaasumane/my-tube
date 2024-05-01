import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_RELATED_VIDEOS_URL } from "../Utils/constant";
import { convertDuration, formatNumber, timeAgo } from "../Utils/helper";
import RelatedShimmer from "./RelatedShimmer";

const RelatedVideoCard = ({ info }) => {
  return (
    <>
      <div>
        <div className="p-2 shadow md:flex lg:block xl:flex  gap-3 rounded-lg  my-3">
          <div className="relative ">
            <img
              src={info?.snippet?.thumbnails?.medium?.url}
              alt={info?.snippet?.title}
              className="lg:w-64 lg:h-24 w-80 h-44 object-cover rounded-lg"
            />
            <span className="absolute right-1 bottom-2 text-white p-1 bg-black rounded-md text-xs">
              {convertDuration(info?.contentDetails?.duration)}
            </span>
          </div>
          <div className="w-full">
            <div className="text-base font-semibold word-break-all ">
              <a
              className="line-clamp-2" title={info?.snippet?.title}
              >
                {info?.snippet?.title}
              </a>
            </div>
            <div className="text-xs">{info?.snippet?.channelTitle}</div>
            {info?.statistics && (
              <p>
                {formatNumber(info?.statistics?.viewCount)} views |{" "}
                {timeAgo(info?.snippet?.publishedAt)}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const RelatedVideoList = ({ VideoCategoryID }) => {
  const [videoCategoryList, setVideoCategoryList] = useState([]);
  useEffect(() => {
    getRelated();
  }, []);
  const getRelated = async () => {
    const response = await fetch(
      `${YOUTUBE_RELATED_VIDEOS_URL}&videoCategoryId=${VideoCategoryID}&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    setVideoCategoryList(data?.items);
  };
  return (
    <>
      {videoCategoryList.length === 0 && <RelatedShimmer />}
      <div className="mx-2">
        {videoCategoryList.length > 0 &&
          videoCategoryList.map((videocat) => (
            <RelatedVideoCard key={videocat.id} info={videocat} />
          ))}
      </div>
    </>
  );
};

export default RelatedVideoList;
