import React from 'react'
import PricingCollection from './PricingCollection'

export default function Pricing() {
  return (
   <div className='w-full bg-[#EBF5FF] '>
     <div className='w-[90%] mx-auto mt-[8rem] nunito p-8'>
    <div className='flex flex-col  items-center  gap-y-[1rem]'>
     <h1 className='text-3xl text-gray-500'>Pricing Plans</h1>
     <p className=' text-gray-500 w-[50%] text-center'>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
    <div className='mt-[5rem]'> <PricingCollection/></div>
   </div>
  </div>
   </div>
  )
}
