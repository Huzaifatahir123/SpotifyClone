import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Playercontext } from '../context/playercontext'

const Songbar = () => {
   const {seekbarref,time,seeksong, next,prev,seekbgref,playstatus,play,pause,track} = useContext(Playercontext);
  return (
   
    <div className='  flex
  bg-transparent
  justify-between 
  max-sm:justify-center max-sm:items-center 
  sticky bottom-0 right-0 
  px-4  
  w-[100vw] h-[14vh] 
   backdrop-blur-lg border border-white/20 
  rounded-t-xl  shadow-xl'>
         
         <div className='flex gap-4 max-sm:hidden justify-center items-center '>
            <img className='h-12' src={track.image} alt="" />
            <h1 className='text-lg text-white'>{track.desc.slice(0,12)}</h1>
            
         </div>

         <div className='flex flex-col justify-center items-center py-4 gap-4'>
            <div className='flex gap-8'>
                <img className='h-6' src={assets.shuffle_icon} alt="" />
                <img onClick={prev}  className='h-6' src={assets.prev_icon} alt="" />
                {playstatus ? <img onClick={pause} className='h-6' src={assets.pause_icon} alt="" />: <img onClick={play} className='h-6' src={assets.play_icon} alt="" /> }
                
               
                <img onClick={next} className='h-6' src={assets.next_icon} alt="" />
                <img className='h-6' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex gap-2 text-gray-100 justify-center items-center'>
           <h1>{time.currenttime.minute}:{time.currenttime.second}</h1>

           <div ref={seekbgref} onClick={seeksong} className='p-1 w-60 max-w-[500px] bg-gray-300'>
                      <hr ref={seekbarref} className=' h-[8px]  rounded-r-2xl  bg-red-500 w-0 '/>
           </div>
           <h1>{time.totaltime.minute}:{time.totaltime.second}</h1>
            </div>
         </div>
         <div className='flex gap-4 max-sm:hidden justify-center items-center'>
            <img className='h-6' src={assets.speaker_icon} alt="" />
            <img className='h-6' src={assets.mini_player_icon} alt="" />
            <img className='h-6' src={assets.mic_icon} alt="" />
            <img className='h-6' src={assets.like_icon} alt="" />
            <img className='h-6' src={assets.volume_icon} alt="" />
         </div>
    </div>
  )
}

export default Songbar