import React from 'react';
import CloudBtn from '@/components/compoenet/CloudBtn';
import Image from 'next/image';

export default function DevelopSection() {
  return (
    <div className='w-full mt-[8rem] nunito mb-8 flex flex-wrap flex-col'>
      <div className=' w-[90%] mx-auto flex  flex-col lg:flex-row'>
        <div className=' w-full lg:w-[50%] flex items-center justify-center mt-8'>
          <Image
            src="/Web.png"
            alt="Example Image"
            width={500}
            height={300}
          />
        </div>
        <div className=' w-full items-center lg:w-[50%] flex flex-col gap-y-8'>
          <h2 className='mt-8 text-3xl text-gray-400'>Design & Development</h2>
          <p className='text-sml leading-8 text-navcolor md:w-[80%] md:items-center'>
            Phasellus vitae velit sit amet diam semper commodo quis quis libero. Morbi consequat arcu augue, molestie faucibus metus ullamcorper vel.
          </p>
          <div className='flex flex-wrap gap-x-4 gap-y-6 items-center justify-center'>
            <CloudBtn btnName={'Web Design'}/>
            <CloudBtn btnName={'Mobile App Design'}/>
            <CloudBtn btnName={'Android Development'}/>
            <CloudBtn btnName={'iOS Development'}/>
            <CloudBtn btnName={'Back-End'}/>
            <CloudBtn btnName={'Front-End'}/>
            <CloudBtn btnName={'e-Commerce'}/>
            <CloudBtn btnName={'Print Design'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
