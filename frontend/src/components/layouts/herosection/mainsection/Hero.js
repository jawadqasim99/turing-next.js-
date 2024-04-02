import React from 'react'

import Style from '@/app/Styles/HomeSection.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

export default function Hero() {
  return (
    <>
   
   <section style={{overflowX : 'hidden' , overflowY:'hidden'} }>
   
      <div className="relative z-[-1] ">
         <div className={`text-center  lg:flex  lg:justify-start lg:text-start w-[100%] lg:w-[90%] h-[100vh]  mx-auto relative`}>
         <div className='lg:hidden ml-[3px] h-[50%] w-[100%]  flex justify-center items-center'>
      <Image src={'/home.jpg'} width={400} height={500} className='rounded-[1rem]'/>
      </div>
            <div className={`w-full  lg:w-[50%] lg:-mt-[10rem] flex-col flex items-center lg:items-start   lg:flex-col gap-y-8 justify-center`}>
               <h3 className={`nunito ${Style.heading} lg:text-[1.6rem] text-[2rem]  `}>Industry Leading Managed Services <br></br> and Staffing <span className='text-blue-900'>Solutions</span></h3>
               <p className='nunito text-[1rem] lg:text-[1rem] lg:tracking-widest tracking-wider leading-8 text-navcolor'>Proven methods to capture business priorities and goals as well <br></br>as current pain points that enables measurable business<br></br>outcomes.</p>
               <span className='-mt-4'>-- -</span>
         <button className='w-[10rem] h-[2rem] text-[15px]  rounded-tl-[1rem] rounded-bl-[1rem] items-center rounded-br-[1rem] flex  pl-8 py-5 bg-[#7168CC] text-white  '>LEARN MORE</button>
            </div>
          
         <div className='hidden absolute lg:flex mx-[-10rem] my-[-11rem] top-0 right-0  w-[50%] h-[100vh] bg-[#7168CC] transform rotate-45 rounded-[2rem] '></div>
     <FontAwesomeIcon icon={faPlayCircle}  className="text-white z-0 w-16 h-12 relative mt-[13rem] ml-[28rem]"/>
      </div>
     

   </div>
</section>
   </>
  )
}
