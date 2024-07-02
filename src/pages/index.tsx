// import {VideoGrid} from '../components/VideoGrid';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Categories } from '@/components/Categories';
import { useState } from 'react';


export default function Home() {
  const categories = ["All", "React routers","Music", "CSS", "T-Series", "Algorithms", "News", "Database" ]
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
  
  return (
    <div className='max-h-screen flex flex-col'>
     
      
      <Header/>
      <div className='grid grid-cols-[auto,1fr] flex-grow overflow-auto'>
      {/* <div><Sidebar/></div> */}
      <div className='sticky top-0 g-white-200 z-10 pb-3 w-full'>
        <Categories categories={categories} selectedCategory={selectedCategory} onSelect/>
        
      </div>
      </div>
    </div>
  );
}
