import React, { useContext } from 'react'
import { Playercontext } from '../context/playercontext'

const Song = ({name,desc,image,id}) => {
  const {playwithid} = useContext(Playercontext);

  return (
       <div onClick={()=>{playwithid(id)}} className='min-w-[180px] p-2 px-3  rounded cursor-pointer hover:bg-[#ffffff26]'>
         <img className='rounded object-cover' src={image} alt="" />
         <p className='font mt-2 mb-1 text-white'>{name}</p>
         <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default Song