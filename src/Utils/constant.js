export const YOUTUBE_API_KEY = "AIzaSyBLjVZNZ7_SMGOmFXz7kXNEmXtO0UyGAmI";

export const YOUTUBE_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cid%2Cstatistics%2CcontentDetails&chart=mostPopular&maxResults=50&regionCode=IN`;
export const YOUTUBE_VIDEO_DETAIL_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cid%2Cstatistics%2CcontentDetails&`;
export const YOUTUBE_CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cid%2Cstatistics%2CcontentDetails&`;
export const YOUTUBE_COMMENT_URL =`https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Creplies%2Csnippet&maxResults=40&videoId=`;
export const YOUTUBE_SEARCH_URL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const YOUTUBE_VIDEO_SEARCH_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&safeSearch=strict&';
export const YOUTUBE_RELATED_VIDEOS_URL='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cid%2Cstatistics%2CcontentDetails&chart=mostPopular&maxResults=50&';