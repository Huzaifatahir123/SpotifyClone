import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData} from '../assets/assets'
import { Playercontext } from '../context/playercontext'
const Displayalbum = () => {
    const {id} = useParams();  
    const albumData = albumsData[id];
        const{playwithid} = useContext(Playercontext);
      return (
    <>
    <Navbar />
    <div  className='mt-10 flex text-white px-10  gap-8 md-flex-row md:items-center'>
        <img src={albumData.image} className='w-48 max-sm:w-24 rounded' alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-2xl font-bold mb-4'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img src={assets.spotify_logo} className='inline-block w-5' alt="" />
                <b>Spotify</b>
                   <br /> 123232 likes <br />
                 <b>50 songs </b>
                about 2 hr 30min

            </p>

        </div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7] mb-4'>
        <p className='mr-4'># Title</p>
        <p>album</p>
        <p className='hidden sm:block'>Data added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
    </div>
    <hr />
    {songsData.map((ele,i)=>(
        <div onClick={()=>{playwithid(i)}} key={i} className='grid grid-cols-3 hover:bg-gray-500 sm:grid-cols-4 gap-18 p-2 items-center  text-[#a7a7a7]'>
            <p className='text-white flex '>
                <b className='mr-4 text-[#a7a7a7]'>{i+1}</b>
                <img className='inline w-10 mr-5' src={ele.image} alt="" /> {ele.name}
            </p>
            <p className='text-[15px]'>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center'>{ele.duration}</p>
        </div>
    ))}      
    </>
  )
}

export default Displayalbum