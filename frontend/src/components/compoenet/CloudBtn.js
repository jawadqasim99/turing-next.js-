import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CloudBtn({btnName}) {
  return (
 <div className='group w-[18rem] h-[2rem] bg-white   text-gray-500  text-[15px] rounded-tl-[1rem] rounded-bl-[1rem] rounded-br-[1rem] flex items-center gap-x-4 pl-8 py-5 transition duration-200  hover:bg-purple-500  hover:pl-12 '>
  <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
  <button className='group-hover:text-white'>
      {btnName} </button>
 </div>
      
    

  )
}
