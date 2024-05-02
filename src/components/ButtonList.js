import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex bg-white dark:bg-black'>
      <Button name="All" className="text-black dark:text-white" />
      <Button name="Trending" />
      <Button name="News" />
      <Button name="Gaming" />
      <Button name="Cricket" />
      <Button name="Science" />
      <Button name="Songs" />
      <Button name="Trailer" />
      <Button name="Education" />
      <Button name="Music" />
      <Button name="Web Series" />
      <Button name="Weddings" />
    </div>
  )
}

export default ButtonList;
