import { RxHamburgerMenu } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from 'react';
import { Button } from "./Button";
import { FaArrowLeft } from "react-icons/fa";

export const Header = () => {
        const [isSmallSearchBar, setSmallSearchBar] = useState<boolean>(false)
    return (
        <>
        <div className={`flex p-4 ml-2 w-full justify-between overflow-x-auto`}>
            <div className={`gap-4 flex-shrink-0 ${isSmallSearchBar ? "hidden" : "flex"}`}>
                <Button variant="ghost" size="icon">
                    <RxHamburgerMenu className={`w-6 h-10 cursor-pointer`}/>
                </Button>
                
                <img src="/yt-logo.png" className={`w-24 h-12`}/>
               
            </div>
            <div className={`flex gap-x-4 ${isSmallSearchBar ? " flex w-full" : "w-1/2"}`}>
            <form className={`gap-4 flex-grow justify-center h-10  ${
          isSmallSearchBar ? "flex" : "hidden md:flex"
        }`}>
                    <div className={`flex flex-grow w-full`}>
                       {isSmallSearchBar && (
                        <Button type="button" variant="ghost" size="icon" onClick={() => setSmallSearchBar(false)} className="md:hidden mr-3">
                                <FaArrowLeft size={20}/>
                        </Button>
                       )}
                             <input type="search" placeholder="Search" className="w-full block rounded-l-full font-roboto shadow-inner py-2 px-3 text-base placeholder-black-600 leading-6 text- focus:border-blue-500 outline-none border"/>
                             <button className="py-2 px-5 rounded-r-full border border-l-0 flex-shrink-0 block shadow-inner bg-[#f8f8f8] hover:bg-[#d3d3d3]">
                                <TfiSearch size={20}/>
                             </button>
                    </div>
                    
            </form>
            <Button type="button" variant="ghost" size="icon" className={`${isSmallSearchBar ? "visible":"max-md:hidden"}`}>
                    <IoMdMic size={20}/>
            </Button>
            </div>
           
            <div className={`flex-shrink-0 md:gap-2 ${isSmallSearchBar ? "hidden": "flex"} `}>
            <Button type="button" variant="ghost" size="icon" className={`md:hidden ${isSmallSearchBar && "hidden"}`} onClick={() => setSmallSearchBar(true)}>
                        <TfiSearch size={20}/>
            </Button>
            <Button type="button" variant="ghost" size="icon" className={`md:hidden`}>
                    <IoMdMic size={20}/>
            </Button>
                    <Button variant="ghost" size="icon">
                            <RiVideoAddLine size={20}/>
                    </Button>
                    <Button variant="ghost" size="icon">
                            <IoIosNotificationsOutline size={20}/>
                    </Button>
                    <Button variant="ghost" size="icon">
                            <span className="text-black bg-blue-300 text-lg">P</span>
                    </Button>
            </div>
        </div>
        </>
    )
   
}