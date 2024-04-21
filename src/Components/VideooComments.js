import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_COMMENT_URL } from "../Utils/constant";
import { timeAgo } from "../Utils/helper";

const SingleComment = ({ comment }) => {
  const { snippet } = comment;
  const { topLevelComment } = snippet;
  return (
    <>
      <div className="p-2 shadow flex items-center gap-3 rounded-lg border-black border-l-2 my-3">
        <img
          src={topLevelComment?.snippet?.authorProfileImageUrl}
          className="h-12 rounded-full"
        />

        <div>
          <div className="flex items-center gap-4">
            <h2 className="font-bold py-1">
              {topLevelComment?.snippet?.authorDisplayName}{" "}
            </h2>
            <p>{timeAgo(topLevelComment?.snippet?.publishedAt)}</p>
          </div>
          {/* <p className="word-break-all">{topLevelComment?.snippet?.textDisplay}</p> */}
          <p className="word-break-all text-comment" dangerouslySetInnerHTML={{ __html: topLevelComment?.snippet?.textDisplay }}></p>


          <div className="pt-2 pb-5">
            <button className=" rounded-full  p-3 hover:bg-gray-200 bg-gray-100">
              <img src="./like.png" className="h-4 w-4 " />
            </button>
            <span className="mx-2">{topLevelComment?.snippet?.likeCount}</span>
            <button className=" rounded-full  p-3 hover:bg-gray-200 bg-gray-100">
              <img src="./dislike.png" className="h-4 w-4 " />
            </button>
            <button className="mx-2 rounded-full  px-3 py-1 hover:bg-gray-200 bg-gray-100">
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const convertData = (data) => {
  const DataArr =
    data &&
    data.map((commentD) => {
      const Data = {
        id:commentD.id,
        snippet: {
          topLevelComment: commentD,
        },
      };
      return Data;
    });
  return DataArr;
};
const CommentList = ({ comments }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleReply = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <div key={comment.id} className="relative">
            <SingleComment key={comment.id} comment={comment} />
            <div className="lg:ml-4 " >
              {comment?.replies?.comments !== undefined &&
                comment?.replies?.comments?.length !== undefined &&
                comment?.replies?.comments?.length > 0 && (
                  <div>
                    <button onClick={toggleReply} className="btn-reply m-1">
                      {showMore ? "Hide reply" : "Show reply"}
                    </button>

                    {showMore && (
                      <CommentList 
                      key={`reply-${comment.id}`}
                        comments={convertData(comment?.replies?.comments)}
                      />
                    )}
                  </div>
                )}
            </div>
          </div>
        );
      })}
    </>
  );
};
const VideooComments = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getVideoComments();
  }, []);
  const getVideoComments = async () => {
    const data = await fetch(
      `${YOUTUBE_COMMENT_URL + videoId}&key=${YOUTUBE_API_KEY}`
    );
    const commentsDetails = await data.json();
    setCommentsList(commentsDetails?.items);
  };
  return (
    <>
      <h2 className="text-3xl py-2 font-bold">Comments</h2>
      <CommentList comments={commentsList} />
    </>
  );
};

export default VideooComments;
