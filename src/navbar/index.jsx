import { useState } from "react";
import bharat from "../assets/bharat.png"
import bharat2 from "../assets/bharat2.jpg"
import useMediaQuery from "../hooks/useMediaQuery";
import {Bars3Icon, XMarkIcon} from  "@heroicons/react/24/solid"

const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const flexBetween ="flex  items-center justify-between"
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
        <div className={`mx-auto w-5/6 p-1`}>
            <div className={`${flexBetween} `}>
                 <div>
                        <img src={bharat} className="w-40 " alt="bharat" />
                 </div>
                 {isAboveMediumScreen
                 ?<div className={`${flexBetween} w-3/6`}>
                    <div className={`${flexBetween} basis-3/5 `}>
                        <p>Home</p>
                        <p>About US</p>
                        <p>Blog</p>
                        <p>Register</p>
                    </div>
                    <img src={bharat2} alt="bharat2" />
                 </div> :(
                    <button
                    className=" rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-2"
                    onClick={()=>setIsMenuToggled(!isMenuToggled)}
                   >
                   <Bars3Icon className=" h-6 w-6 text-white"/>
                   </button>
                 )}
            </div>

            {/* MOBILE VIEW */}
            {!isAboveMediumScreen && isMenuToggled && (
                     <div className={` h-full fixed right-0 bottom-0 z-40 w-[300px] bg-gray-600 drop-shadow-2xl`}>
                        <div className="flex justify-end p-10">
                             <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                                 <XMarkIcon className=" mx-4 h-8 w-8 text-gray-400" />
                             </button>
                         </div>
                        <div className="w-full h-[50%]">
                             <div className="ml-[33%] flex flex-col gap-6 text-white">
                             <p>Home</p>
                             <p>About US</p>
                             <p>Blog</p>
                             <p>Register</p>
                             </div>
                        </div> 
              </div>
            )}
           
        </div>
    </nav>
  )
}

export default Navbar