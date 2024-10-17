import { useState } from "react";
import { useProps } from "../assets/useStore";


const HamburgerIcon = ({className, onClick} : {className?: string, onClick?: () => void }) => {
    const {open} = useProps();


  return (
    <div className={`${className} z-40 cursor-pointer fixed right-2 w-[5rem] h-[5rem] rounded-md m-2 grid grid-cols-2 gap-1 p-4 transition-all ${open? 'rotate-90' : ''}`} onClick={onClick}>
      <div className='bg-red-1 backdrop-blur-sm rounded-lg' />
      <div className='bg-black/80 backdrop-blur-sm rounded-xl' />
      <div className='bg-black/80 backdrop-blur-sm rounded-xl' />
      <div className='bg-black/80 backdrop-blur-sm rounded-xl' /> 
    </div>
  )
}

export default HamburgerIcon
