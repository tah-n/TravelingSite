'use client'
import React from 'react'
import Button from './Button';

const Footer = () => {
  return (
    <footer className=''>
      <div className='lg:flex items-center justify-center gap-16'>
        <div className='flex flex-col items-center justify-center overflow-hidden mt-8'>
            <div>
                <img src='images/logodark.png' width={100} />
            </div>
            <div className='text-gray-600 text-sm'>
                <p>Travel helps companies</p>
                <p>manage payments easily</p>
            </div>

            <div className='flex gap-3 items-center justify-center mt-8'>
                <div className='cursor-pointer'>
                    <img src='images/linkedin.png' width={20} />
                </div>
                <div className='cursor-pointer'>
                    <img src='images/whatsapp.png' width={20} />
                </div>
                <div className='cursor-pointer'>
                    <img src='images/x.png' width={20} />
                </div>
                <div className='cursor-pointer'>
                    <img src='images/twoo.png' width={20} />
                </div>
            </div>
        </div>

        <div className='flex gap-5 items-center justify-center'>
            <div className='flex items-center flex-col mt-10'>
                <h1 className='text-lg font-bold p-5'>
                    Company
                </h1>
                <ul className='capitalize flex text-sm flex-col gap-5 text-center'>
                    <li className='cursor-pointer'>about us</li>
                    <li className='cursor-pointer'>careers</li>
                    <li className='cursor-pointer'>blog</li>
                    <li className='cursor-pointer'>pricing</li>
                </ul>
            </div>

            <div className='flex items-center flex-col mt-10'>
                <h1 className='text-lg font-bold p-5'>
                    Destinations
                </h1>
                <ul className='capitalize flex text-sm flex-col gap-5 text-center'>
                    <li className='cursor-pointer'>maldives</li>
                    <li className='cursor-pointer'>los angeles</li>
                    <li className='cursor-pointer'>las vegas</li>
                    <li className='cursor-pointer'>torronto</li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col items-center mt-10 '>
            <h1 className='text-lg font-bold p-5'>
                Join Our Newsletter
            </h1>
            <div className='relative w-[20rem] md:w-[27rem]'>
                <input placeholder='your email address' className='outline-none bg-[#EEEEFF] p-2 h-14 placeholder:capitalize placeholder:text-[#181433]/40 w-[100%] backdrop-blur-md rounded-md ' />
                <Button className='absolute right-0' onClick={() => console.log('subscribe')}>
                    Subscribe
                </Button>
            <p className='text-[#181433]/50 mt-2  text-sm'>* Will send you weekly updates for your better tour packages.</p>
            </div>
        </div>

      </div>

      <div className='flex flex-col items-center gap-4 p-4 lg:mt-32 mt-20'>
        <div className='w-96 lg:w-[70%] h-[2px] rounded-lg bg-[#181433]/50' />
        <p className='text-sm'>Copyright @ Xpro 2022. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer;
