import React, { useEffect, useState } from 'react'
import HamburgerIcon from './HamburgerIcon'
import Button from './Button'
import CloseIcon from './CloseIcon'
import { useProps } from '../assets/useStore'
import Backdrop from './Backdrop'


interface typeProps {
    className?: string,
    items?:
        {
            name: string,
            href: string
        }[]
    
}

const BurgerMenu = ({className, items} : typeProps) => {
    const { open, setOpen } = useProps();
    const [show,setShow] = useState<boolean>(false);
    const [lastScroll,setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if(currentScroll < 120) {
                setShow(true);
            } else if (currentScroll > lastScroll) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScroll(currentScroll);
        }

        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[lastScroll])
 
  return (
    <>
     <div className={`${className} ${show? 'translate-y-0' : '-translate-y-[100%]'} backdrop-blur-lg  transition-all fixed z-50 md:!hidden w-screen h-[12vh]`}>
        <div className="md:hidden absolute top-5 left-5">
            <img src="images/logodark.png" width={85} className="mt-2" />
        </div>
        <HamburgerIcon onClick={setOpen} />
    </div>    
        <Backdrop />
        <div className={`bg-gray-1/60 backdrop-blur-md z-[100] w-[60%] h-screen fixed right-0 top-0 rounded-md p-6 flex flex-col gap-4 font-semibold text-lg capitalize text-black/80 items-start pt-[20vh] transition-all ${open? 'translate-x-0 translate-y-0' : 'translate-x-[100%]'}`} >
            <CloseIcon onClick={setOpen} />
            {items?.map((item, i) => (
                <div key={i} className=''>
                    <a href={item.href}>{item.name}</a>
                </div>
            ))}
            <Button className='!w-[5rem] text-sm mt-7' onClick={() => console.log('get in touch')}>
                Get in Touch
            </Button>
        </div>
    </>
   
  )
}

export default BurgerMenu;
