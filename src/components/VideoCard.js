import React from 'react';

const VideoCard = ({ info }) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72'>
      <img className='rounded-xl' alt='thumbnail' src={thumbnails.medium.url}/>
      <ul>
        <li className='font-semibold text-black dark:text-white'>{title}</li>
        <li className='font-semibold text-black dark:text-white'>{channelTitle}</li>
        <li className='font-semibold text-black dark:text-white'>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;
