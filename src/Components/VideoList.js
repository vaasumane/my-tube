import React, { useEffect, useState } from "react";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_VIDEO_SEARCH_URL,
  YOUTUBE_VIDEO_URL,
} from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { clearVideoList, setVideoItemList } from "../Utils/videoSlice";

const VideoList = () => {
  const [showShimmer, setshowShimmer] = useState(false);
  const [pageToken, setPageToken] = useState("");
  const getSearchText = useSelector((store) => store.search.searchText);
  const dispatch = useDispatch();
  const getvideoList1 = useSelector((store) => store.video.videoItems);
  const getcategory = useSelector((store) => store.search.category);
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      HandleVideoScroll();
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageToken]);

  useEffect(() => {
    if (
      getSearchText &&
      getSearchText.trim() !== "" &&
      getSearchText !== undefined
    ) {
      getSearchVideoList();
    } else {
      getVideoList();
    }
  }, [getSearchText]);
  useEffect(() => {
    getVideoList();
  }, [getcategory]);

  const getVideoList = async () => {
    let data;
    if (getcategory !== "" && getcategory !== undefined) {
      data = await fetch(
        YOUTUBE_VIDEO_URL +
          `&videoCategoryId=${getcategory}&key=${YOUTUBE_API_KEY}`
      );
    } else {
      data = await fetch(
        YOUTUBE_VIDEO_URL + `&key=${YOUTUBE_API_KEY}`
      );
    }
    const response = await data.json();
    if (!data.ok) {
      console.log("Error:", data.status, data.statusText);
      return;
    }
    if (response.items.length > 0) {
      setPageToken(response?.nextPageToken ? response?.nextPageToken : "");

      dispatch(clearVideoList());
      dispatch(setVideoItemList(response?.items));
    }
  };
  const getSearchVideoList = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_SEARCH_URL + `q=${getSearchText}&key=${YOUTUBE_API_KEY}`
    );
    const response = await data.json();
    setPageToken(response?.nextPageToken ? response?.nextPageToken : "");

    dispatch(clearVideoList());
    dispatch(setVideoItemList(response?.items));
  };
  const HandleVideoScroll = async () => {
    console.log(pageToken);
    if (pageToken !== "") {
      if (
        getSearchText &&
        getSearchText.trim() !== "" &&
        getSearchText !== undefined
      ) {
        const data = await fetch(
          YOUTUBE_VIDEO_SEARCH_URL +
            `&pageToken=${pageToken}&q=${getSearchText}&key=${YOUTUBE_API_KEY}`
        );
        const response = await data.json();
        setPageToken(response?.nextPageToken);
        dispatch(setVideoItemList(response?.items));
      } else {
        const data = await fetch(
          YOUTUBE_VIDEO_URL + `&pageToken=${pageToken}&key=${YOUTUBE_API_KEY}`
        );
        const response = await data.json();
        setPageToken(response?.nextPageToken);
        dispatch(setVideoItemList(response?.items));
      }
    }
  };
  if (getvideoList1.length === 0) return <Shimmer />;
  return (
    <>
      <div className="flex flex-wrap justify-center" id="video-list">
        {getvideoList1.length > 0 &&
          getvideoList1.map((video, index) => (
           
            <VideoCard
              key={video.id + index}
              info={video}
              videoId={
                typeof video.id === "object" ? video.id.videoId : video.id
              }
            />
          ))}
      </div>
    </>
  );
};

export default VideoList;
