import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex py-3">
      <img
        className="w-8 h-8"
        alt="user-image"
        src="https://www.logolynx.com/images/logolynx/c8/c8a513f752c48d35387bf93103b48785.jpeg"
      />
      <div className="px-3">
        <p className="font-bold text-black dark:text-white">{name}</p>
        <p className="text-black dark:text-white">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
