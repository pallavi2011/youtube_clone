import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";

export const Sidebar = () => {
    const [open, setOpen] = useState(true);
    let iconStyles = { fontSize: "1.5em"};
    
    const Menus = [
        {
            title:"Home",
            icon: <MdHomeFilled style={iconStyles}/>
        },
        {
            title:"Shorts",
            icon:<SiYoutubeshorts style={iconStyles}/>
        },
        {
            title:"Subscriptions",
            icon:<MdOutlineSubscriptions style={iconStyles}/>
        }
    ]

    const yourMenu =[
         {
            title:"Your channel",
            icon:<MdHomeFilled style={iconStyles}/> 
        },
        {
            title:"History",
            icon:<GoHistory style={iconStyles}/>
        },
        {
            title:"Playlists",
            icon:<MdOutlinePlaylistPlay style={iconStyles}/>
        },
        {
            title:"Your videos",
            icon:<GoVideo style={iconStyles}/>
        },
        {
            title:"Watch later",
            icon:<MdOutlineWatchLater style={iconStyles}/>
        },
        {
            title:"Liked videos",
            icon:<BiLike style={iconStyles}/>
        },


    ]
    const settings =[
        {
           title:"Settings",
           icon:<IoSettingsOutline style={iconStyles}/> 
       },
       {
           title:"Report History",
           icon:<MdOutlineOutlinedFlag style={iconStyles}/>
       },
       {
           title:"Help",
           icon:<IoIosHelpCircleOutline style={iconStyles}/>
       },
       {
           title:"Send Feedback",
           icon:<MdOutlineFeedback style={iconStyles}/>
       }
   ]
    return <div className="flex fixed z-50 duration-200 left-0 top-0 bottom-0">

        <div className={`h-screen p-5 ${open ? "w-72" :"w-[5rem]"} duration-300 overflow-auto`} >
           
               
            <div className="flex items-center">
                <RxHamburgerMenu className={`w-6 h-10 cursor-pointer ml-3 mr-2`} onClick={() => setOpen(!open)}/>
                <img src="/yt-logo.png" className={`w-24 h-10 ${!open && "hidden"}`}/>
               
            </div>
            <div className={`grid grid-cols-1 ${open && "divide-y"}`}>
                <ul className={`pt-2`}>
                {Menus.map((menu, index) => (
                   
                    <li key={index} className={`text-black-100 text-lg flex items-center gap-x-3 font-roboto p-1 hover:bg-[#dbdbdb] hover:rounded-lg  ${!open && "flex flex-col mb-2"}`}><span className={`w-6 h-6`}>{menu.icon}</span><span className={`text-base font-normal leading-8 ${!open && "text-xs leading-6"}`}>{menu.title}</span></li>
                    
                ))}

            </ul>
            <div className={`pt-4 pl-3`}>
               
                <div className={`text-lg flex items-center  font-roboto hover:bg-[#dbdbdb] hover:rounded-lg gap-3 ${!open && "flex flex-col gap-y-1 mr-2"}`}> <MdOutlineVideoLibrary className={`${open && "hidden"} w-8 h-8`}/> <span className={`${!open && "text-xs leading-6"}`}>You</span> <IoIosArrowForward size={20} className={`${!open && "hidden"}`}/></div>
                <ul className={`pt-2 ${!open && "hidden"}`}>
                {yourMenu.map((menu, index) => (
                    <>
                    <li key={index} className="text-black-100 text-lg flex items-center gap-3 font-roboto pl-0 p-2 hover:bg-[#dbdbdb] hover:rounded-lg"><span className="w-6 h-6">{menu.icon}</span><span className="text-base font-normal leading-8">{menu.title}</span></li>
                    </>
                ))}

            </ul>
            </div>
            <div className={`pt-4 pl-3 ${!open && "hidden"}`}>
               
                <span className="text-lg flex items-center  font-roboto hover:bg-[#dbdbdb] hover:rounded-lg gap-3">Subscriptions</span>
                <ul className="pt-2">
                {yourMenu.map((menu, index) => (
                    <>
                    <li key={index} className="text-black-100 text-lg flex items-center gap-3 font-roboto pl-0 p-2 hover:bg-[#dbdbdb] hover:rounded-lg"><span className="w-6 h-6">{menu.icon}</span><span className="text-base font-normal leading-8">{menu.title}</span></li>
                    </>
                ))}

            </ul>
            </div>
            <div className={`pt-4 pl-3 ${!open && "hidden"}`}>
                <ul className="pt-2">
                {settings.map((menu, index) => (
                    <>
                    <li key={index} className="text-black-100 text-lg flex items-center gap-3 font-roboto pl-0 p-2 hover:bg-[#dbdbdb] hover:rounded-lg"><span className="w-6 h-6">{menu.icon}</span><span className="text-base font-normal leading-8">{menu.title}</span></li>
                    </>
                ))}

            </ul>
            </div>
            </div>
            
            
            
           
           
        </div>

    </div>
}