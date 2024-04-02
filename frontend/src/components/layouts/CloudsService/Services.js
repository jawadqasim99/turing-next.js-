import CloudBtn from '@/components/compoenet/CloudBtn'
import React from 'react'

    import Image from 'next/image'

export default function Services() {
  return (
    <div className='w-full bg-[#ebf5ff]  mt-[7rem] nunito flex items-center justify-center lg:h-[37rem]'>
      <div className='main w-[90%] mx-auto  flex items-center justify-center flex-col lg:flex-row pb-12'>
        <div className=' flex flex-col lg:w-[50%] items-center justify-center  gap-y-8 '>
    <h2 className='mt-16 text-3xl text-gray-400' >Cloud Service</h2>
    <p className='text-sml leading-8 text-navcolor'>
    Phasellus vitae velit sit amet diam semper commodo quis quis libero. Morbi consequat arcu augue, molestie faucibus metus ullamcorper vel.
    </p>
    <div className='btn flex gap-x-12 gap-y-6 flex-wrap items-center justify-center'>
<CloudBtn btnName={'NeverCloud'}/>
<CloudBtn btnName={'Office Cloud'}/>
<CloudBtn btnName={'Backup Systems'}/>
<CloudBtn btnName={'Hybrid Cloud'}/>
<CloudBtn btnName={'Api Cloud'}/>
<CloudBtn btnName={'Sdk Cloud'}/>
<CloudBtn btnName={'Web Services'}/>
<CloudBtn btnName={'Cloud Hosting'}/>
    </div>
        </div>
        <div className='hidden w-[50%] lg:flex  items-center h-[100%] justify-center mt-8  '>
       <Image
       src="/cloud.png"
       alt="Example Image"
        width={500}
        height={300}
       
       />
        </div>
      </div>
    </div>
  )
}
