
import React from 'react'
import UniversalBtn from './UniversalBtn'

export default function BlogsCard({url , heading, des}) {
  return (
    <div className='w-[21rem] lg:w-[25rem] flex flex-col text-center gap-y-4 items-center nunito tracking-wider'>
       <img src={url}className='w-full h-[12rem]  rounded-lg object-fill ' alt='Loading' />
     
        <h1 className='tracking-widest mt-6 mb-4 text-gray-600 hover:text-[#7168CC] cursor-pointer'>{heading}</h1>
        <p className='text-gray-500 mb-3 text-[0.8rem]'>{des}</p>
      <UniversalBtn/>
    </div>
  )
}
