// import {VideoGrid} from '../components/VideoGrid';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Categories } from '@/components/Categories';
import { useState } from 'react';
import { VideoCard } from '@/components/VideoCard';
import {videos } from "../data/videos";


export default function Home() {
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
    <div className='max-h-screen flex flex-col'>
     
      
      <Header/>
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
      <div>Sidebar</div>
      <div className="overflow-x-hidden px-8 pb-4">
      <div className='sticky top-0 bg-white z-10 pb-3'>
        <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map(video => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
      </div>
      </div>
    </div>
  );
}
