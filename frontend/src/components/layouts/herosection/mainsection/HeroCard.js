import Cards from '@/components/compoenet/Cards'
import React from 'react'
import {faCloud} from "@fortawesome/free-solid-svg-icons"
import {faLaptop} from "@fortawesome/free-solid-svg-icons"
import {faCamera} from "@fortawesome/free-solid-svg-icons"


export default function HeroCard() {
  return (
    <div className='flex w-[90%] mx-auto justify-center lg:justify-between flex-wrap gap-y-12 gap-x-8'>
      <Cards icon={faCloud} name={'Cloud Solutions'} des={'Morbitlity pharetra sapiening ut matttis viverra. Curabitur mange.'}/>
      <Cards icon={faLaptop} name={'Netwerk Services'} des={'Donec pelleentesque turipis utium lorem imperdiet semper viverra.'}/>
      <Cards icon={faCamera} name={'Webcast Services'} des={'Fasilisis arrcu ligula, males id tincidunt laoreer, facilisis at justo.' } />
      <Cards icon={faLaptop} name={'Disaster Recovery'} des={'Proin aruc ligula, malesuada id tincidunt laoreer, facilisis at justo.'}/>
     
    </div>
  )
}
