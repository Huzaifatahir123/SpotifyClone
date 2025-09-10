import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData} from '../assets/assets'
import { Playercontext } from '../context/playercontext'
const Displayalbum = () => {
    const {id} = useParams();  
    const albumData = albumsData[id];
    const bg = albumData.bgColor;
        const{playwithid} = useContext(Playercontext);
      return (
    <section  style={{backgroundColor:bg}}>
    <Navbar />
    <div  className={`mt-10 flex  text-white px-10   gap-8 md-flex-row md:items-center`}>
        <img src={albumData.image} className='w-48 max-sm:w-34 object-contain rounded' alt="" />
        <div className='flex flex-col gap-2'>
            <p>Playlist</p>
            <h2 className='text-2xl font-bold '>{albumData.name}</h2>
            <h4 className='max-sm:hidden'>{albumData.desc}</h4>
            <div className='flex gap-5 max-sm:hidden items-center '>
                     <img src={assets.spotify_logo} className='w-12' alt="" />
                     <h1>25000 likes</h1>
            </div>
            
            

        </div>
    </div>
    <div className='grid grid-cols-3 max-sm:gap-18 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7] mb-4'>
        <p className='mr-4'>#Title</p>
        <p>album</p>
        <p className='hidden sm:block'>Data added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
    </div>
    <hr />
    {songsData.map((ele,i)=>(
        <div onClick={()=>{playwithid(i)}} key={i} className='grid grid-cols-3 hover:bg-gray-500 sm:grid-cols-4 gap-22  p-2 items-center  text-[#a7a7a7]'>
            <p className='text-white flex '>
                <b className='mr-2 text-[#a7a7a7]'>{i > 8 ? `${i+1}` : `0${i+1}`}</b>
                <img className='inline object-cover w-10 mr-2' src={ele.image} alt="" /> <h1 className='text-xs'>{ele.name}</h1>
            </p>
            <p className='sm:text-[15px] max-sm:text-xs '>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center'>{ele.duration}</p>
        </div>
    ))}      
    </section>
  )
}

export default Displayalbum