import { VideoCard } from "./VideoCard";

export function VideoGrid(){
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-3">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
    </div>)
}