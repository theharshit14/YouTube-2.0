import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if (!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-md w-48'>
      <ul>
        <li className='py-2 text-black dark:text-white'>Home</li>
        <li className='py-2 text-black dark:text-white'>Shorts</li>
        <li className='py-2 text-black dark:text-white'>Subscriptions</li>
        <li className='py-2 text-black dark:text-white'>You</li>
        <li className='py-2 text-black dark:text-white'>History</li>
      </ul>
      <h1 className='font-bold py-2 text-lg text-black dark:text-white'>Explore</h1>
      <ul>
      <li className='py-2 text-black dark:text-white'>Trending</li>
      <li className='py-2 text-black dark:text-white'>Shopping</li>
      <li className='py-2 text-black dark:text-white'>Music</li>
      <li className='py-2 text-black dark:text-white'>Movies</li>
      <li className='py-2 text-black dark:text-white'>Live</li>
      <li className='py-2 text-black dark:text-white'>Gaming</li>
      <li className='py-2 text-black dark:text-white'>News</li>
      <li className='py-2 text-black dark:text-white'>Sports</li>
      </ul>
    </div>
  )
}

export default Sidebar;
