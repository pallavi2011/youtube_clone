import { HomePageVideos } from "@/Types";
import { FaCheckCircle } from "react-icons/fa";

// type VideoCardProps = {
//     id: string
//     title: string
//     channel: {
//       id: string
//       name: string
//       profileUrl: string
//     }
//     views: number
//     postedAt: Date
//     duration: number
//     thumbnailUrl: string
//     videoUrl: string
//   }

export default function  VideoCard({data}:{data:HomePageVideos}){
    return(
        <div className="flex flex-col gap-2"> 
             <a href="#" className="relative aspect-video">
             <img src={data.videoThumbnail} alt="thumbnail_img" className="w-full h-full object-cover rounded-xl transition-[border-radius]  duration-300 hover:rounded-none"/>
             <div className="absolute right-1 bottom-1 bg-black-200 text-white-200 text-sm px-1 rounded">
              {data.videoDuration}
             </div>
             </a>
             <div className="flex gap-2">
                <a href="#" className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={data.channelInfo.image} />
                </a>
                <div className="flex flex-col">
                <a href="#" className="font-bold">
                    {data.videoTitle}
                </a>
                <a href="#" className="text-secondary-text text-sm">
                    {data.channelInfo.name}
                </a>
                <div className="text-secondary-text text-sm">
                {data.videoViews} Views • {data.videoAge}
                </div>
                </div>
      </div>
            
     
        </div>
    )
}