"use client"
import { items } from "../assets/tools";
import Button from "./Button";
import { brands } from "../assets/tools";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import { useEventStore, useProps } from "../assets/useStore";
import Link from "next/link";
import Calender from "./Calender";
import moment from "moment";
import NumberofPeople from "./NumberofPeople";
import Backdrop from "./Backdrop";



const Hero = () => {
  const [active,setActive] = useState(false);
  const[location,setLocation] = useState('');
  const [loading,setLoading] = useState(false);
  const setTours = useProps((state) => state.setTours);
  const setCurrentPage = useProps(state => state.setCurrentPage);
  const [showCalendar,setShowCalendar] = useState(false);
  const {events} = useEventStore();
  const [showCount,setShowCount] = useState(false);
  const adults = useProps(state => state.adults);
  const kids = useProps(state => state.kids);
  const {open,setOpen} = useProps();

  const handleShowCount = () => {
    setShowCount(!showCount);
  }

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  }
  



  const handleEnter = (name: string) => {
    if(name === 'services') {
      setActive(true);
    }
   
  }

  const handleLeave = () => {
      setActive(false);
  }


  

  const handleSubmit = async() => {
    if(location !== '') {
      setLoading(true);
       fetch(`https://travel-site-server-sage.vercel.app/amadeus-data?location=${location}`)
      .then(response => {
        if(!response.ok) {
          throw new Error(`Http error! status: ${response.status}`);
        }
        return response.json();
      }
      )
      .then(data => {
        console.log('Tours and activities:' , data.data);
        toast.success('Data Fetched Successfully');
        setLoading(false);
        if(data.data.length > 0) {
          setCurrentPage('tours');
          setTours(data.data);
        } else {
          toast.warn(`No Activities Found In ${location}`);
        }
      }).catch(error => {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data');
        setLoading(false);
      })
    } else {
      toast.warn('Please Enter a Location Name.')
    }

  }

  const formatDate = (date: Date) => {
    return moment(date).format('MMMDD')
  }
 


  return (
    <section id="home" className="h-[100vh] m-0 flex flex-col">
       <div className="w-full h-full bg-center md:bg-hero bg-blue-oceanBlue md:bg-cover md:bg-no-repeat bg-[length:100%] bg-[width:100%] md:px-[8rem] xl:px-[15rem] lg:py-[3rem]">
        <div className="hidden w-full md:flex items-center justify-between ">
          <img src='/images/logo.png' alt="logo" width={100} height={100} />
          <div className="relative flex gap-4 transition-all capitalize text-gray-1 font-semibold p-7">
            {items.map((item, i) => (
              <div key={i}
                className="hover:text-white cursor-pointer flex leading-1"
                onMouseEnter={() => handleEnter(item.name)}
              >
                <Link href={item.href}>
                {item.name}
                </Link>
                {item.name === 'services' ? 
                <div className="w-[1rem] flex items-center justify-center h-[1.5rem] m-1">
                  <img src="images/Vector2.png"/>
                </div> : null}
                <div 
                  onMouseLeave={() => handleLeave()}
                  className={`${active? 'translate-y-4 opacity-100': 'translate-y-8 opacity-0 pointer-events-none'} text-black/50 transition-all duration-300 ease-in-out transform absolute bg-white shadow-md backdrop-blur-md -bottom-[8rem] rounded-xl w-80 right-0 p-5`}>
                  <ul className='flex flex-col gap-4'>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>Honeymoon packages</li>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>tours packages</li>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>Musical events</li>
                    <li className='text-sm hover:cursor-pointer hover:text-gray-600 transition-all'>build package</li>
                  </ul>

                </div>
              </div>
            ))}

            
        
          </div>
          <Button className="mr-2" onClick={() => console.log("clicked")}>
            Get in Touch
          </Button>
        </div>
        <Navbar />
        <BurgerMenu items={items} />
        

        {/* middle part */}
        <div className="mt-[7rem]">
          <div className="relative py-2 flex text-white font-bold md:text-4xl sm:text-4xl p-8 md:px-0 text-3xl md:w-[30rem] xl:text-5xl md:mb-2 mb-4">
            <div className="absolute top-0">
            <img
              src="images/Vector1.png"
              width={60}
              height={50}
              className="w-[60px] xl:w-[65px]"
            />
            </div>
            <h1 className="line-clamp-3 pb-2">
              No matter where 
              you're going to, we'll 
              take you there
            </h1>
          </div>

          <div className="flex gap-1 md:flex-row flex-col m-auto md:m-0 items-center justify-between bg-gray-1/40 backdrop-blur-xl p-4 w-[70%] md:w-[90%] rounded-md shadow-2xl">
            <form onSubmit={handleSubmit} className="w-full h-full text-gray-1/80 flex md:flex-row flex-col gap-2 items-center justify-between md:pr-2">
              <input onChange={(e) => setLocation(e.currentTarget.value)} value={location} type="text" name="place" placeholder="Which City?" className="form placeholder:text-gray-1/80 text-white px-1 focus:bg-none active:bg-none" />
             <div className="form relative">
             <div 
              id="type"
              className="form  !border-none !w-fit flex items-center justify-center cursor-pointer hover:text-white"
              onClick={handleShowCalendar}
              >
                <p>{events.length>0? formatDate(events[0].start): 'When'}</p>
              </div>
              {showCalendar && <Calender />}
             </div>
              
            </form>
            <div className="w-full relative px-1 flex text-gray-1/80 items-center justify-start cursor-pointer md:mb-0 mb-5 h-[3rem] hover:text-white">
                <div onClick={handleShowCount} className="form capitalize relative !border-none !w-fit flex items-center justify-center cursor-pointer hover:text-white">
                 <p>{adults>0 || kids>0? adults + ' adults,' + kids + ' kids' : 'how many people'}</p>
                </div>
                {showCount &&
                <NumberofPeople />
                }
              </div>

            <Button onClick={handleSubmit}>
              <span className={`${loading && 'hidden'}`}>Submit</span>
              <SyncLoader size={11} loading={loading} color="#ffffff" />
            </Button>
          </div>
        </div>
       </div>

       <div className="w-full h-[150px] flex items-center justify-center px-4 md:gap-0 gap-4">
        {brands.map((brand, i) => (
          <div key={i} className="w-full flex items-center justify-center">
            <img 
            src={brand.pic}
            alt={brand.alt}
            width={120}
            />
          </div>
        ))}
       </div>

      
    </section>
  )
}

export default Hero;
