'use client'

import { useState } from "react"
import { reviews } from "../assets/tools"

const About = () => {
    let [count,setCount] = useState(0);

    const handledecrease = () => {
        setCount((prevCount) => prevCount === 0 ? reviews.length - 1: prevCount - 1);
        console.log(count);
    }

    const handleIncrease = () => {
        setCount((prevCount) => prevCount === reviews.length - 1 ? 0 : prevCount + 1)
    }

  return (
    <div id='about' className='py-[10rem]'>
      <div className="relative w-full bg-gray-1/30 flex flex-col items-center justify-center gap-16 py-10">
        <div className="text-center">
            <span className='text-red-1 text-sm tracking-wider font-semibold font-mono uppercase'>promotion</span>
            <h2 className='text-blue-darkblue w-80 capitalize font-bold text-2xl md:text-3xl mb-3'>
                see what our clients say about us
            </h2>
        </div>

        <div className="flex items-center">
                <div className="w-[3rem] h-[3rem] rounded-full bg-[#737373] translate-x-5 hover:bg-[#5b5b5b] cursor-pointer z-20 flex items-center justify-center active:scale-90 transition-all" onClick={handledecrease}>
                    <img src="images/left.png" />
                </div>    

                <div className="md:w-[31rem] sm:w-[70%] w-[83%] bg-white z-10 relative flex flex-col items-center justify-center rounded-3xl h-[19rem] px-1">
                    <div className="absolute -top-16 w-[130px] h-[150px] overflow-hidden">
                        <img src={reviews[count].avatar} width={150} height={150} alt="avatar" className="" />
                    </div>
                    <div className="text-center w-[90%]">
                        <div className="relative">
                            <div className="-z-10 absolute left-0 -top-5">
                                <img src="images/quotes1.png" width={50}/>
                            </div>
                            <p className="text-sm leading-6">
                                {reviews[count].review}<span className="font-bold text-lg">&#34;</span>
                            </p>
                        </div>
                        <p className="text-sm capitalize font-extrabold mt-4">{reviews[count].name} - <span>{reviews[count].job}</span></p>
                        
                    </div>

                </div>

                <div 
                className="w-[3rem] h-[3rem] rounded-full bg-[#737373] -translate-x-5 hover:bg-[#5b5b5b] cursor-pointer z-20 flex items-center justify-center active:scale-90 transition-all"
                onClick={handleIncrease}
                >
                    <img src="images/right.png"  />
                </div>  
        </div>

        <div className="absolute bottom-0 left-0">
            <img src="images/bg.png" width={300} height={100} className="w-[]" />
        </div>
      </div> 
    </div>
  )
}

export default About
