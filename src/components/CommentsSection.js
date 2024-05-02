import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Harshit Verma",
    text: "This is very beautiful video made by Akshay Saini.",
    replies: [
      {
        name: "Harshit Verma",
        text: "This is very beautiful video made by Akshay Saini.",
        replies: [],
      },
      {
        name: "Harshit Verma",
        text: "This is very beautiful video made by Akshay Saini.",
        replies: [],
      },
    ],
  },
  {
    name: "Harshit Verma",
    text: "This is very beautiful video made by Akshay Saini.",
    replies: [],
  },
  {
    name: "Harshit Verma",
    text: "This is very beautiful video made by Akshay Saini.",
    replies: [],
  },
  {
    name: "Harshit Verma",
    text: "This is very beautiful video made by Akshay Saini.",
    replies: [
      {
        name: "Harshit Verma",
        text: "This is very beautiful video made by Akshay Saini.",
        replies: [
            {
                name: "Harshit Verma",
                text: "This is very beautiful video made by Akshay Saini.",
                replies: [],
              },
        ],
      },
      {
        name: "Harshit Verma",
        text: "This is very beautiful video made by Akshay Saini.",
        replies: [],
      },
      {
        name: "Harshit Verma",
        text: "This is very beautiful video made by Akshay Saini.",
        replies: [
            {
                name: "Harshit Verma",
                text: "This is very beautiful video made by Akshay Saini.",
                replies: [],
              },
        ],
      },
    ],
  },
  {
    name: "Harshit Verma",
    text: "This is very beautiful video made by Akshay Saini.",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
    <Comment data={comment} />
    <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies}/>
    </div>
    </div>
  ));
};

const CommentsSection = () => {
  return (
    <div className="p-2 m-1">
      <h1 className="text-2xl font-bold text-black dark:text-white">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsSection;
