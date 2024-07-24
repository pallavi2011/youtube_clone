// import {VideoGrid} from '../components/VideoGrid';
import { useEffect} from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Categories } from '@/components/Categories';
import { useState } from 'react';
import VideoCard  from '@/components/VideoCard';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
    console.log(videos)
  }, [dispatch]);

  const categories = ["All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding"]
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
  
  return (
    <div className='max-h-screen flex flex-col overflow-hidden'>
     
      <Header/>
      <div className='grid grid-cols-[auto,1fr] flex-grow-1'>
      <div>Sidebar</div>
      <div className="overflow-x-hidden px-8 pb-4">
      <div className='sticky top-0 bg-white z-10 pb-3'>
        <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
      {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader="null"
            height={650}
          >
      
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pr-3">
          {videos.map((item: HomePageVideos) => {
                return <VideoCard key={item.videoId} data={item} />
            })}
            
            </div>
      </InfiniteScroll>
      ):(
              <div>Null</div>)
             
              }
              </div>
              </div>
            
     
    </div>
  );
}
