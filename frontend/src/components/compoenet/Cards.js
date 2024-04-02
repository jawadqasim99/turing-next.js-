import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Cards({icon,name,des}) {

  return (
 
     <div className='nunito flex flex-col w-[18rem] h-[15rem] items-center justify-center px-[2rem] rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-[2rem] gap-y-4 bg-[#7168CC] gap-x-3rem text-white' style={{boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}>
    <div className='w-[3rem] h-[3rem] text-[#7168CC] text-center flex justify-center items-center bg-white p-3 rounded-tl-[1rem] rounded-bl-[1rem] rounded-br-[1rem]'>
        <FontAwesomeIcon icon={icon} size='xl' />
    </div>
    <h3>{name}</h3>
    <p >{des}  </p>

   </div>
  


  )
}
