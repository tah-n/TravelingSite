import React from 'react'
import { useProps } from '../assets/useStore';

const NumberofPeople = () => {
    const adults = useProps(state => state.adults);
    const increment = useProps(state => state.increment);
    const decrement = useProps(state => state.decrement);
    const kids = useProps(state => state.kids);
    const increase = useProps(state => state.increase);
    const decrease = useProps(state => state.decrease);


  return (
    <div className='absolute z-[50] top-12 rounded-md bg-white py-2 shadow-md capitalize left-0 text-blue-darkblue w-[16rem] sm:w-[18rem] h-auto'>
      <div className='w-full flex items-center justify-between px-5'>
        <p className='text-sm font-semibold'>adults</p>
        <div className='text-2xl font-semibold '>
            <button onClick={decrement} className='p-4 text-2xl hover:text-blue-1'>-</button>
            <span className='text-sm'>{adults}</span>
            <button onClick={increment} className='p-4 text-xl hover:text-blue-1'>+</button>
        </div>
      </div>

      <div className='w-full flex items-center justify-between px-5'>
        <p className='text-sm font-semibold'>kids</p>
        <div className='text-2xl font-semibold '>
            <button onClick={decrease} className='p-4 text-2xl hover:text-blue-1'>-</button>
            <span className='text-sm'>{kids}</span>
            <button onClick={increase} className='p-4 text-xl hover:text-blue-1'>+</button>
        </div>
      </div>

    </div>
  )
}

export default NumberofPeople;
