import React from "react";

const SingleComment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <>
      <div className="p-2 bg-gray-100 flex items-center gap-3 rounded-lg border-black border-l-2 my-2">
        <img src="./user_image.png" className="h-8" />

        <div>
          <h2 className="text-2xl py-1">name</h2>
          <p>text</p>
        </div>
      </div>
    </>
  );
};
const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <>
            <SingleComment key={"commets_" + index} comment={comment} />
            <div className="ml-4">
              <CommentList comments={comment.replies} />
            </div>
          </>
        );
      })}
    </>
  );
};
const CustomComment = () => {
  const commentArr = [
    {
      name: "vaasu",
      text: "lorem ipsum dolor",
      replies: [
        {
          name: "vaasu",
          text: "lorem ipsum dolor",
          replies: [],
        },
      ],
    },
    {
      name: "vaasu",
      text: "lorem ipsum dolor",
      replies: [
        {
          name: "vaasu",
          text: "lorem ipsum dolor",
          replies: [
            {
              name: "vaasu",
              text: "lorem ipsum dolor",
              replies: [
                {
                  name: "vaasu",
                  text: "lorem ipsum dolor",
                  replies: [
                    {
                      name: "vaasu",
                      text: "lorem ipsum dolor",
                      replies: [
                        {
                          name: "vaasu",
                          text: "lorem ipsum dolor",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "vaasu",
              text: "lorem ipsum dolor",
              replies: [],
            },
          ],
        },
        {
          name: "vaasu",
          text: "lorem ipsum dolor",
          replies: [],
        },
      ],
    },
    {
      name: "vaasu",
      text: "lorem ipsum dolor",
      replies: [],
    },
    {
      name: "vaasu",
      text: "lorem ipsum dolor",
      replies: [],
    },
  ];

  return (
    <>
      <h2 className="text-3xl py-2 font-bold">Comments</h2>

      <CommentList comments={commentArr} />
    </>
  );
};

export default CustomComment;
