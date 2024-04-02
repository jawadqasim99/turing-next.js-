import React from 'react'
import BlogsCollection from './BlogsCollection'

export default function BlogsContainer() {
  return (
    <div className='w-[90%] mx-auto mt-[8rem] nunito'>
     <div className='flex flex-col  items-center  gap-y-2'>
      <h1 className='text-3xl text-gray-500 tracking-widest'>Latest Blog Posts</h1>
      <p className=' text-gray-500 w-[50%] text-center tracking-widest mt-8'>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
     <div className='mt-[5rem]'> <BlogsCollection/></div>
    </div>
   </div>
  )
}
