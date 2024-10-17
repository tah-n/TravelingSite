'use client' 
import React, { useEffect } from 'react'
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SVGComponent from './SVGComponenet';

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)

const PlaneAnimation = () => {
 useEffect(() => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.plane',
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });
  tl.to('.plane', {
    duration: 5,
    ease: 'power1.inOut',
    motionPath: {
      path: '.path',
      align: '.path',
      alignOrigin: [0.5,0.5],
      autoRotate: true,
    },
  })



  return () => {
    tl.kill();
  }
 },[])
  
  return (
    <div className='min-h-[70vh] z-10 w-full'>
     <SVGComponent />
    </div>
  )
}

export default PlaneAnimation;
