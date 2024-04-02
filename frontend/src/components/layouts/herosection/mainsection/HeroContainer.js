import React from 'react'
import Hero from './Hero'
import HeroCard from './HeroCard'

export default function HeroContainer() {
  return (
    <div className='flex flex-col gap-y-[5rem] lg:gap-y-0'>
      <Hero/>
      <HeroCard/>
    </div>
  )
}
