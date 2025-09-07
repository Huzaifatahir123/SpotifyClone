import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigate = useNavigate();
  return (
    <div className='flex justify-between px-4 py-4'>
        <div className='flex gap-1 justify-center items-center'>
            <img onClick={()=>{navigate(1)}} className='h-8 order-2' src={assets.arrow_right} alt="" />
            <img onClick={()=>{navigate(-1)}} className='h-8' src={assets.arrow_left} alt="" />
        </div>
        <div className='flex gap-2'>
<button className='px-4 max-sm:px-1 max-sm:py-0.5 text-xs py-2 rounded-sm bg-white text-black'>Explore Premium</button>
<button className='px-4 max-sm:px-1 max-sm:py-0.5 text-xs py-2 rounded-sm bg-white text-black'>Install App</button>
        </div>
        
    </div>
  )
}

export default Navbar