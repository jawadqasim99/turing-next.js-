import React from 'react'
// import Style from '@/app/Styles/Nav.module.css'

export default function Buttons({btnName}) {

  return (
   
     <button className={`w-24 h-8  border border-black text-xs font-bold  rounded-tl-[1rem] rounded-bl-[1rem] rounded-br-[1rem] `}>{btnName} </button>
   
  )
}
