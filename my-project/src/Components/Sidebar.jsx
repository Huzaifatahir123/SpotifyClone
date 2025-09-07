import React from 'react'
import {assets} from "../assets/assets"
const Sidebar = () => {
  return (
    <div className='hidden  bg-[#121212] max-sm:hidden flex-col gap-1 h-[85vh] w-[25vw]'>
       
        <div className='flex  py-4  px-4  flex-col gap-4'>
            <div className='flex gap-4'>
          <h1 className='text-white text-lg order-2'>Home</h1>
         <img className='w-8' src={assets.home_icon}  alt="" />
            </div>
            <div className='flex gap-4'>
          <h1 className='text-white text-lg order-2'>Search</h1>
         <img className='w-8' src={assets.search_icon}  alt="" />
            </div>
        </div>
        

        <div className='flex bg-zinc-900 px-4 py-4 justify-between'>
            <div className='flex justify-center items-center gap-4'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <h1 className='text-white text-lg'>Your Library</h1>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img className='w-8' src={assets.arrow_icon} alt="" />
                <img className='w-8' src={assets.plus_icon} alt="" />
            </div>
        </div>


        <div className='px-4 py-4 bg-gray-900 flex flex-col gap-2'>
   <h1 className='font-bold text-white text-xl'>Create Your First playlist </h1>
   <p className='text-gray-200 font-normal'>it is easy we will help</p>
   <button className='px-4 py-2 cursor-pointer rounded-2xl bg-white text-black '>Create playlist</button>
        </div>


        <div className='px-4 py-4 bg-gray-900 flex flex-col gap-2'>
   <h1 className='font-bold text-white text-xl'>Lets Find some Podcast to follow</h1>
   <p className='text-gray-200 font-normal'>We will help you update with new episode</p>
   <button className='px-4 py-2 cursor-pointer rounded-2xl bg-white text-black '>Browse podcasts</button>
        </div>
        
 
    </div>
  )
}

export default Sidebar