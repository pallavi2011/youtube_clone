import { FaCheckCircle } from "react-icons/fa";

export const  VideoCard= () =>{
    return(
        <div className="flex flex-col"> 
            <img src="/yt_1.jpg" alt="thumbnail_img" className="w-full rounded-xl"/>
            <div className="flex flex-row w-full">
                
                    <img src="/yt_1.jpg" className="w-10 h-10 ml-1 mt-2 rounded-full sm:rounded-full md:rounded-full"/>
                
                <div className="w-[3/4] pl-2 pt-2 pr-2">
                    <h4>Build an app that can highlight your resume</h4>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <span className="pr-3">Geetha arts</span>
                            <FaCheckCircle size={20}/>
                        </div>
                <div className="flex flex-row">
                    <span>67M views  .  5 years ago</span>

                </div>
                


            </div>
                </div>
                
            </div>
            

            
        </div>
    )
}