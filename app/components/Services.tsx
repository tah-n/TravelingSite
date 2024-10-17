"use client" 
import React from 'react'
import { booking, services } from '../assets/tools';
import PlaneAnimation from './PlaneAnimation';
import PromotionPart from './PromotionPart';
import Trending from './Trending';


const Services = () => {
  return (
    <section id='services' className='min-h-screen'>
        <div className='w-full text-center capitalize mt-12 leading-8 md:mt-24'>
            <span className='text-red-1 text-sm tracking-wider font-semibold font-mono uppercase'>Category</span>
            <h2 className='text-blue-darkblue font-bold text-2xl md:text-3xl'>
                we offer best services
            </h2>
        </div>

        <div className='w-full flex flex-col md:flex-row items-center gap-8 mt-10 md:justify-center lg:px-20 text-blue-darkblue'> 
            {services.map((service, i) => (
                <div key={i} className='flex flex-col w-[50%] md:flex-row items-center md:w-[40%] lg:w-[15%] z-40 rounded-3xl relative gap-2 text-center'>
                <div  className={`${i === 1? "shadow-md" : "shadow-none"} bg-white py-8 px-2 flex items-center flex-col gap-2 rounded-3xl`}>
                    <div>
                        <img src={service.image} alt='service' width={80} height={80} className='w-[80px] object-cover'  />
                    </div>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p>{service.desc}</p>
                </div>
               {i === 1 && <div className='-z-20 bg-red-3 w-[5rem] h-[5rem] absolute rounded-3xl -bottom-6 -left-6' />}
                </div>
            ))}
        </div>

        <div className='relative w-full h-[90vh] flex items-center justify-center'>
            <PlaneAnimation />
            <div className='z-20 flex justify-between rounded-xl backdrop-blur-sm gap-2 bg-none w-[86%] md:w-[84%] lg:w-[78%] p-7 absolute md:top-[15rem]'>
                <div className='mr-8'>
                    <div className='mb-6'>
                        <span className='text-red-1 text-sm tracking-wider font-semibold font-mono uppercase'>fast & easy</span>
                        <h2 className='text-blue-darkblue capitalize font-bold text-2xl md:text-3xl'>
                            get your favorite resort booking
                        </h2>
                    </div>
                    <div>
                        {booking.map((item,i) => (
                            <div key={i}
                            className='flex items-center justify-start'
                            >
                                <div className={`p-3 ${i==0 && "bg-[#F0BB1F]"} ${i==1 && "bg-[#F15A2B]"}  ${i==2 && "bg-[#006380]"} flex items-center justify-center rounded-lg m-2`}>
                                    <img src={item.icon} width={20} height={20} className='w-[20px] h-[15px]'  />
                                </div>
                                <div className='p-1'>
                                    <h2 className='text-blue-darkblue capitalize font-bold text-sm'>{item.title}</h2>
                                    <p className='text-xs '>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='hidden md:block'>
                    <div className='relative'>
                    <div className='w-[17rem] p-4 shadow-md rounded-2xl'>
                        <div className='mb-2'>
                            <img src='images/postalCard.png' className='object-cover' />
                        </div>
                        <h2 className='text-xs leading-7 text-blue-darkblue font-semibold tracking-wider'>Trip to Hawaii</h2>
                        <div className='flex text-xs text-gray-500 tracking-tighter'>
                            <div className='h-full pr-1 mr-3 border-r border-r-gray-500/50'>
                                <span>14-29 June </span>    
                            </div>
                            <span>By JR Martin</span>
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <div className='w-6 h-6 rounded-full bg-gray-1/20 p-1 flex items-center justify-center'>
                                <img src='images/leaf.png' width={9} height={9} />
                            </div>
                            <div className='w-6 h-6 rounded-full bg-gray-1/20 p-1 flex items-center justify-center'>
                                <img src='images/map.png' width={9} height={9} />
                            </div>
                            <div className='w-6 h-6 rounded-full bg-gray-1/20 p-1 flex items-center justify-center'>
                                <img src='images/send.png' width={9} height={9} />
                            </div>
                        </div>

                        <div className='mt-6 flex justify-between px-2'>
                            <div className='flex gap-2'>
                                <img src='images/building.png' width={10} height={10} />
                                <p className='text-xs text-gray-500 tracking-tighter'>60 people are interested</p>
                            </div>
                            <div>
                                <img src='images/like.png' width={14} height={14}/>
                            </div>
                        </div>

                    </div>

                    <div className='w-[11rem] z-10 bg-white absolute -right-10 bottom-8 shadow-md rounded-2xl p-2'>
                        <div className='flex items-center gap-2 justify-start'>
                            <div className='rounded-full w-8 h-8 overflow-hidden'>
                                <img src='images/image 32.png' width={40} height={40} />
                            </div>
                            <div className='text-left'>
                                <span className='text-[0.6rem] text-gray-500'>Ongoing</span>
                                <h2 className='text-xs leading-3 text-blue-darkblue font-semibold tracking-wider'>Trip to rome</h2>
                            </div>
                        </div>

                        <div className='mt-2 p-2 w-full'>
                            <p className='text-xs'>
                            <span className='text-red-1'>40% </span>
                                completed.
                            </p>
                            <div className='w-full mt-2 h-1 bg-gray-1/40 rounded-xl'>
                                <div className='w-14 h-full bg-red-1 rounded-xl'></div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <PromotionPart />

        <Trending />
    </section>
  )
}

export default Services;
