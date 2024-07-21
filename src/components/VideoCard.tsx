import { FaCheckCircle } from "react-icons/fa";

type VideoCardProps = {
    id: string
    title: string
    channel: {
      id: string
      name: string
      profileUrl: string
    }
    views: number
    postedAt: Date
    duration: number
    thumbnailUrl: string
    videoUrl: string
  }

export function  VideoCard({ id,
    title,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
  }: VideoCardProps){
    return(
        <div className="flex flex-col gap-2"> 
             <a href="#" className="relative aspect-video">
             <img src={thumbnailUrl} alt="thumbnail_img" className="w-full h-full object-cover rounded-xl transition-[border-radius]  duration-300 hover:rounded-none"/>
             <div className="absolute right-1 bottom-1 bg-black-200 text-white-200 text-sm px-1 rounded"></div>
             </a>
             <div className="flex gap-2">
                <a href={`/@${channel.id}`} className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
                </a>
                <div className="flex flex-col">
                <a href={`/watch?v=${id}`} className="font-bold">
                    {title}
                </a>
                <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
                    {channel.name}
                </a>
                <div className="text-secondary-text text-sm">
                Views • 22M
                </div>
                </div>
      </div>
            
     
        </div>
    )
}