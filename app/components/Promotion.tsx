import React from 'react'

const Promotion = () => {
  return (
    <div className='w-full hidden md:block min-h-[10vh] overflow-hidden mt-[9rem]'>
        <div className="w-full flex items-center justify-start md:bg-promotion h-[30vh] md:bg-[length:100%] md:bg-[height: 100%] bg-no-repeat text-center">
            <div className='relative text-white text-center text-xl font-semibold tracking-wide w-56 ml-48 md:bottom-4 lg:ml-[15rem] lg:bottom-0 xl:ml-[20rem] lg:text-3xl lg:w-96   '>
                <h1>Let's Make Your Next Holiday Amazing</h1>
                <div className='mt-1 absolute right-6 lg:right-20'>
                    <img src='images/line 1.png' width={90} height={100} />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Promotion;
