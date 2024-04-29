import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_URL } from "../Utils/constant";

const ChannelProfile = ({ channel_id }) => {
  const [channelDetails, setChannelDetails] = useState([]);

  useEffect(() => {
    getChannelDetails(channel_id);
  }, []);
  const getChannelDetails = async (channel_id) => {
    const data = await fetch(
      `${YOUTUBE_CHANNEL_URL}id=${channel_id}&key=${YOUTUBE_API_KEY}`
    );
    const channelData = await data.json();
    setChannelDetails(channelData?.items);
  };
  return (
    <>
      <img
        className="rounded-full h-full w-full object-cover"
        alt="channel-image"
        src={channelDetails?.[0]?.snippet?.thumbnails?.medium?.url}
      />
    </>
  );
};

export default ChannelProfile;
