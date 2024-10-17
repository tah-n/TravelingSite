'use client'
import React, { useState } from 'react'
import { items } from '../assets/tools'
import Button from './Button'
import Navbar from './Navbar'
import BurgerMenu from './BurgerMenu'
import Link from 'next/link'

const Menu = () => {
    const [active,setActive] = useState(false);
    

    const handleNavigation = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
      element.scrollIntoView({behavior: 'smooth'});
      } else {
        console.log('id not found'+element)
      }
    }

  
  



  const handleEnter = (name: string) => {
    if(name === 'services') {
      setActive(true);
    }
   
  }

  const handleLeave = () => {
      setActive(false);
  }
  return (
    <div className="w-full h-[70vh] bg-center md:bg-activity md:h-[60vh] bg-blue-oceanBlue md:bg-cover md:bg-no-repeat bg-[length:100%] bg-[width:100%] md:px-[8rem] xl:px-[15rem] lg:py-[3rem]">
        <div className="hidden w-full md:flex items-center justify-between ">
          <img src='/images/logo.png' alt="logo" width={100} height={100} />
          <div className="relative flex gap-4 transition-all capitalize text-gray-1 font-semibold p-7">
            {items.map((item, i) => (
              <div key={i}
                className="hover:text-white cursor-pointer flex leading-1"
                onMouseEnter={() => handleEnter(item.name)}
              >
                <Link href={item.href} className='capitalize' onClick={() => handleNavigation(item.name)}>
                 {item.name}
                </Link>
                {item.name === 'services' ? 
                <div className="w-[1rem] flex items-center justify-center h-[1.5rem] m-1">
                  <img src="images/Vector2.png"/>
                </div> : null}
                <div 
                  onMouseLeave={() => handleLeave()}
                  className={`${active? 'translate-y-4 opacity-100': 'translate-y-8 opacity-0 pointer-events-none'} text-black/50 transition-all duration-300 ease-in-out transform absolute bg-white shadow-md backdrop-blur-md -bottom-[8rem] rounded-xl w-80 right-0 p-5`}>
                  <ul className='flex flex-col gap-4'>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>Honeymoon packages</li>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>tours packages</li>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>Musical events</li>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>build package</li>
                  </ul>

                </div>
              </div>
            ))}

            
        
          </div>
          <Button className="mr-2" onClick={() => console.log("clicked")}>
            Get in Touch
          </Button>
        </div>
        <Navbar />
        <BurgerMenu items={items} />


    </div>    
  )
}

export default Menu;
