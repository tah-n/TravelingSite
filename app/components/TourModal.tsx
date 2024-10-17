'use client'
import React, { useState } from 'react'
import { useProps } from '../assets/useStore';

const TourModal = () => {
    const {tours} = useProps();
    const [expanded,setExpanded] = useState(false);
    const [expandedItem,setExpandedItem] = useState<{ [key: number]: boolean}>({})

    const handleExpanded = (i: number) => {
        setExpandedItem((prev) => ({...prev, [i]: !prev[i]}))
        setExpanded(!expanded);
    }

    const PAGE_SIZE = 21;
    const visiblePages = 10;
    const [page,setPage] = useState(1);
    const totalPages = Math.ceil(tours.length / PAGE_SIZE);
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentPageItems = tours.slice(startIndex, endIndex);


    let startPage = page - Math.floor(visiblePages / 2);
    if(startPage < 1) startPage = 1;

    let endPage = startPage + visiblePages - 1;
    if(endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - visiblePages + 1)
    }

    
    
    const handlePageClick = (page: number) => {
        setPage(page);
    }

  return (
    <section className='-translate-y-48 md:-translate-y-28'>
        <div className='m-auto text-center text-white text-6xl md:text-[5rem] -translate-y-16'>
            <h1 className='yesteryear capitalize'>Travel With us</h1>
        </div>

        <div className='w-[80%] lg:w-[75%] xl:w-[58%] bg-white shadow-2xl m-auto py-10 -translate-y-10 flex items-center justify-center '>
            <div className='grid grid-cols-1 gap-1 items-center justify-center md:grid md:grid-cols-2 md:gap-2 md:items-center lg:grid-cols-3 pb-5'>
            {currentPageItems.map((item, i) => (
                <div key={item.id} className={`${i === 0 && 'bg-white shadow-xl lg:-translate-x-20 lg:-translate-y-4 '} pb-5 min-h-[50vh] rounded-xl overflow-hidden w-[70vw] sm:w-[20rem] md:w-[18rem] lg:w-[15rem]`}>
                    <div className='relative w-full overflow-hidden h-40 text-center bg-gray-1/10'>
                        {item.pictures.length>0? <img src={item.pictures[0]} width={400} className='object-cover w-full' /> : <h3 className='text-xs text-black/70 capitalize mt-[10%]'>no picture available</h3>}
                        <div className='absolute w-full bg-red-1 h-6 bottom-0 z-10 flex items-center pl-2 gap-2'>
                            <div className='flex gap-1 items-center '>
                                <img src='images/date.png' width={16} height={10} />
                                <span className='text-sm text-white/70'>Date</span>
                            </div>
                            <div className='flex gap-1 items-center '>
                                <img src='images/people.png' width={18} height={10} />
                                <span className='text-xs text-white/70'>+150 people</span>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-4 p-2 h-auto bg-white rounded-md transition-all`}>
                        <h1 className='text-[1rem] text-blue-darkblue font-bold pb-2 leading-5'>{item.name}</h1>
                        {(item.shortDescription || item.description) && 
                        (
                            <div className={`${i===0 && 'overflow-y-auto h-[6rem]'} w-full h-auto bg-white rounded-md ${expandedItem[i]? 'absolute z-30 p-1 ': 'relative z-0 '} w-[67vw] md:w-[14rem] `}>
                             <p className={`text-black/60 text-xs  ${expandedItem[i]? '' : 'line-clamp-3'} item-description`}>
                              {item.shortDescription? item.shortDescription: item.description}
                             </p>
                             <span className={`text-[0.7rem] font-semibold cursor-pointer hover:underline `} onClick={() => handleExpanded(i)}>{expandedItem[i]? 'Show less' : 'Read more'}</span>

                            </div>
                        )
                        }
                    </div>

                    {item.bookingLink? (
                    <div className='text-xs underline font-semibold text-blue-700 cursor-pointer ml-2'>
                        <a href={item.bookingLink}>
                            <span>Book Now</span>
                        </a>
                    </div>): null}


                </div>
            ))}
        
            </div>

            <div className='absolute bottom-5 flex items-center justify-center gap-2 w-[70%]'>
                {Array.from({ length: endPage - startPage + 1}, (_, i) => {
                    const pageNumber = startPage + i; 

                    return (
                        <button key={pageNumber} onClick={() => handlePageClick(pageNumber)}
                        className={`${page === pageNumber? 'text-red-1' : 'text-black/40'} text-xs font-semibold hover:text-red-1 rounded-full border text-center p-1 `}
                    >
                        {pageNumber}
                    </button>
                    )
                

                })}

                
            </div>

        </div>

       
    </section>
    
  )
}

export default TourModal;
