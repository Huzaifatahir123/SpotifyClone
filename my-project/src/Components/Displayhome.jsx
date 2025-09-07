import React from 'react'
import Navbar from './Navbar'
import { albumsData ,songsData } from '../assets/assets'
import Album from './Album'
import Song from './Song'
const Displayhome = () => {
  return (
    <div className=''>
         <Navbar />
         <div className=''>
           <h1 className='font-bold text-2xl px-2 text-white my-5'>Featured  charts</h1>
           <div className=' overflow-auto flex'>
             {
                albumsData.map((ele,i)=>(
                      <Album name={ele.name} desc={ele.desc} image={ele.image} id={ele.id}/>
                ))
             }
         </div>
         </div>
         <div className='mb-4'>
           <h1 className='font-bold text-white px-2 text-2xl my-5'>Todays Big hits</h1>
           <div className=' overflow-auto flex'>
             {
                songsData.map((ele,i)=>(
                      <Song name={ele.name} desc={ele.desc} image={ele.image} id={ele.id}/>
                ))
             }
         </div>
         </div>
         
    </div>
  )
}

export default Displayhome