import { packages } from "../assets/tools";
import Button from "./Button";

const Packages = () => {
  return (
    <div className="w-full md:mt-[10rem]">
        <div className="flex flex-col">
            <div className="text-center">
                <span className='text-red-1 text-sm tracking-wider font-semibold font-mono uppercase'>trendy</span>
                <h2 className='text-blue-darkblue capitalize font-bold text-2xl md:text-3xl mb-3'>
                        our trending tour packages
                </h2>
            </div>
            <div className="mt-5 w-full px-14 flex md:grid md:grid-cols-2 md:px-32 lg:grid-cols-3 lg:px-36 xl:px-52 lg:gap-14 flex-col gap-5 md:gap-3 items-center justify-center">
                {packages.map((p, i) => (
                    <div key={i} className="">
                        <div className="relative">
                            <img src={p.pic} />
                            <div className="absolute w-32 z-10 -bottom-20">
                                <img src={p.flag} />
                            </div>
                        </div>

                        <div className="mt-10">
                            <div className="flex items-center text-gray-500 tracking-tighter text-sm gap-1">
                                <img src="images/calender.png" width={20} />
                                <span className="h-full pr-1 mr-8">{p.duration}</span>
                                <img src="images/avatar.png" width={15} height={15} className="h-[15px]" />
                                <span>{p.people}</span>
                            </div>
                            <div className="">
                                <div className="flex justify-between items-center pr-6">
                                    <h1 className="text-2xl font-extrabold text-blue-darkblue capitalize leading-10">{p.title}</h1>
                                    <img src={p.rating} width={70} className="h-[20px]" />
                                </div>
                                <div className="flex text-gray-500 tracking-tighter capitalize">
                                    <img src="images/location.png" width={20} />
                                    <span>{p.location}</span>
                                </div>
                                <div className="flex mt-2 gap-10 text-xl font-bold">
                                    <p className="text-red-1">{p.price}</p>
                                    <p className="text-gray-600 line-through">{p.off}</p>
                                </div>
                                <p className="my-2 text-xs">
                                    {p.desc}
                                </p>
                                <Button className="!text-xs mt-5 pl-2 !text-left w-[7rem]" onClick={() => console.log('explore')}>Explore Now</Button>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Packages;
