import React from 'react'
import CardCollection from './CardCollection'

export default function TeamSection() {
  return (
   <div className='w-[90%] mx-auto mt-[8rem] nunito'>
     <div className='flex flex-col  items-center  gap-y-[1rem]'>
      <h1 className='text-3xl text-gray-500'>Our Team</h1>
      <p className=' text-gray-500 w-[50%] text-center'>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
     <div className='mt-[5rem]'> <CardCollection/></div>
    </div>
   </div>
  )
}
