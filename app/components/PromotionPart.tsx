import React from 'react'
import Promotion from './Promotion'

const PromotionPart = () => {
  return (
    <div className='w-full h-screen'>
        <Promotion />
        <div className='w-full md:mt-20 lg:mt-44 flex items-center justify-center'> 
            <div className='w-full lg:w-[80%] xl:w-[65%] relative md:flex-row flex flex-col lg:flex-col lg:justify-start lg:items-start justify-center items-center'>
                <div className='w-[70%] md:w-[50%] lg:w-[40%]'>
                    <span className='text-red-1 text-sm tracking-wider font-semibold font-mono uppercase'>promotion</span>
                    <h2 className='text-blue-darkblue capitalize font-bold text-2xl md:text-3xl mb-3'>
                            we provide you best europe sightseeing tours
                    </h2>
                    <p className='text-xs leading-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur odio eum officia nulla voluptate rem veritatis impedit totam, porro labore nisi? Quidem laudantium maxime quibusdam blanditiis doloribus temporibus explicabo?</p>
                </div>

                <div className='lg:flex lg:flex-row grid grid-cols-2 gap-6 mt-10 lg:mt-32'>
                    <div className='relative'>
                        <div className='absolute w-12 h-8 text-center top-2 left-2 bg-red-1 rounded-full'>
                            <span className='text-xs font-bold text-white'>
                                700$
                            </span>
                        </div>
                        <img src='images/timesquare.png' width={160} height={200} className='md:w-[150px]'/>
                    </div>
                    <div className='relative'>
                        <div className='absolute w-12 h-8 text-center top-2 left-2 bg-red-1 rounded-full'>
                            <span className='text-xs font-bold text-white'>
                                800$
                            </span>
                        </div>
                        <img src='images/river.png' width={160} height={200} className='md:w-[150px]'/>
                    </div>
                    <div className='relative'>
                        <div className='absolute w-12 h-8 text-center top-2 left-2 bg-red-1 rounded-full'>
                            <span className='text-xs font-bold text-white'>
                                500$
                            </span>
                        </div>    
                        <img src='images/rome.png' width={160} height={200} className='md:w-[150px]'/>
                    </div>
                    <div className='relative'>
                        <div className='absolute w-12 h-8 text-center top-2 left-2 bg-red-1 rounded-full'>
                            <span className='text-xs font-bold text-white'>
                                400$
                            </span>
                        </div>
                        <img src='images/india.png' width={160} height={200} className='md:w-[150px]'/>
                    </div>
                </div>

                <div className='hidden w-[300px] h-[500px] absolute right-0 -top-2 lg:block -z-20'>
                    <div className='relative'>
                    <div className='absolute w-full h-full pt-4 border-2 -z-10 rounded-t-full border-[#A7327A] -translate-x-2 -translate-y-3' />
                        <div className='rounded-t-full overflow-hidden'>
                            <img src='images/eifell.png' className='w-[300px] h-[500px] object-cover' />
                        </div>
                    </div>

                </div>
            </div>

        </div>

      
    </div>
  )
}

export default PromotionPart
