import React from 'react'

const ExplorePackages = () => {
  return (
    <div className='w-full hidden md:flex min-h-[10vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] overflow-hidden mt-[9rem] md:mt-[30rem]'>
        <div className='w-full relative bg-nature bg-[length: 100%] bg-[height: 100%] bg-cover h-full bg-no-repeat'>
            <div className='w-full flex flex-col items-center justify-center h-full bg-black/30 text-white'>
                <span className='uppercase text-sm leading-3'>Promotion</span>
                <h1 className='capitalize font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Explore Nature</h1>
                <button className='lg:w-40  mt-2 h-12 font-semibold text-left text-sm rounded-xl border border-2-white p-2 hover:bg-white/10 capitalize'>View packages</button>

            </div>
        </div>
        <div className='w-full bg-city bg-[length: 100%] bg-[height: 100%] h-full bg-cover bg-no-repeat'>
            <div className='w-full flex flex-col items-center justify-center h-full bg-black/30 text-white'>
                <span className='uppercase text-sm leading-3'>Promotion</span>
                <h1 className='capitalize md:text-2xl font-bold lg:text-3xl xl:text-4xl'>Explore Cities</h1>
                <button className='lg:w-40  mt-2 h-12 font-semibold text-left text-sm rounded-xl border border-2-white p-2 hover:bg-white/10 capitalize'>View packages</button>
            </div>
        </div>
    </div>
  )
}

export default ExplorePackages;
