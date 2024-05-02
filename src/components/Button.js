import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
      <button className='px-3 py-1 p-4 m-2 rounded-md bg-slate-200 dark:bg-gray-900 text-black dark:text-white'>{name}</button>
    </div>
  )
}

export default Button;
