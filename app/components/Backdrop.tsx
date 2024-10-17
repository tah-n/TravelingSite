import React from 'react'
import { useProps } from '../assets/useStore';

const Backdrop = () => {
    const { open, setOpen} = useProps();

  return (
    <div className={`fixed w-full h-screen top-0 left-0 right-0 bottom-0 z-[45] ${open? 'block' : 'hidden'}`}  onClick={setOpen}>
      
    </div>
  )
}

export default Backdrop;
