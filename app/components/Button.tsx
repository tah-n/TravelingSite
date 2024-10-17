'use client'
import React, { Children } from 'react'

interface buttonProps {
    className?: string,
    children: React.ReactNode,
    onClick: () => void
}

const Button = ({className, children, onClick} : buttonProps) => {

  return (
    <button className={`${className} w-[9rem] min-w-[7rem] h-[3.5rem] rounded-xl text-white font-semibold text-center md:text-sm lg:text-[1.05rem] bg-red-1 transition-all hover:bg-[#c85e49] active:bg-[#b35442]`}
      onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button
