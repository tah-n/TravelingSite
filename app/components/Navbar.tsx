import Button from './Button'
import { items } from '../assets/tools'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const [show,setShow] = useState<Boolean>(false);
    const [lastScrollY,setLastScrollY] = useState<number>(0);
    const [scrollDirection,setScrollDirection] = useState<string>('');
    const [active,setActive] = useState(false);

    const handleEnter = (name: string) => {
      if(name === 'services') {
        setActive(true);
      }
     
    }

    const handleLeave = () => {
        setActive(false);
    }


    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if(currentScroll < 110) {
                setShow(false);
            } else if(currentScroll > lastScrollY) {
                setScrollDirection('down');
                setShow(false);
            } else {
                setShow(true);
                setScrollDirection('up')
            }
            setLastScrollY(currentScroll);
        }
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }

        
    },[lastScrollY])
  return (
    <div className={`${show? '': '-translate-y-[100%]'} transition-all hidden fixed top-0 left-0 px-4 w-screen z-50 bg-white/60 backdrop-blur-md md:flex items-center justify-between shadow-sm`}>
          <img src='/images/logodark.png' alt="logo" width={100} height={100} />
          <div className="relative flex gap-4 transition-all capitalize text-black/50 font-semibold p-7">
            {items.map((item, i) => (
              <div key={i}
                className="hover:text-black/80 cursor-pointer flex leading-1"
                onMouseEnter={() => handleEnter(item.name)} 
              >
                <a href={item.href}>
                {item.name}
                </a>
                {item.name === 'services' ? 
                <div className="w-[1rem] flex items-center justify-center h-[1.5rem] m-1">
                  <img src="images/grayvector.png"/>
                </div> : null}
                <div 
                onMouseLeave={() => handleLeave()}
                className={`${active? 'translate-y-4 opacity-100': 'translate-y-8 opacity-0 pointer-events-none'} text-black/50 transition-all duration-300 ease-in-out transform absolute bg-white shadow-md backdrop-blur-md -bottom-[8rem] rounded-xl w-80 right-0 p-5`}
              >
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
  )
}

export default Navbar
