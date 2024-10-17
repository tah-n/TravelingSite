'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import HomePage from './HomePage';
import Activities from './Activities';
import { useProps } from '../assets/useStore';
import Footer from './Footer';
import Menu from './Menu';

const HandlePages = () => {
    const {currentPage} = useProps();


    return (
        <>
          {currentPage === 'homePage'? <HomePage /> :  
          <Activities />
          }
          <ToastContainer 
          pauseOnHover
          autoClose={3000}
          closeOnClick
          position='bottom-right'
          theme='colored'  
          />
          <Footer />
        </>
    );
}

export default HandlePages;
