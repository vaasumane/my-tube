export const YOUTUBE_API_KEY = "AIzaSyBLjVZNZ7_SMGOmFXz7kXNEmXtO0UyGAmI";

export const YOUTUBE_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cid%2Cstatistics%2CcontentDetails&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;
export const YOUTUBE_VIDEO_DETAIL_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cid%2Cstatistics%2CcontentDetails&`;
export const YOUTUBE_CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cid%2Cstatistics%2CcontentDetails&`;

