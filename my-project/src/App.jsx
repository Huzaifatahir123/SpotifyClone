import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Songbar from './Components/Songbar'
import Display from './Components/Display'
import { Playercontext } from './context/playercontext'

const App = () => {
  const {audiaref,track} = useContext(Playercontext);
  return (
    <div className='bg-black w-screen h-screen'>
      <div className='flex h-[90%]'>
               <Sidebar />
               <Display />
      </div>
      <Songbar />
      <audio ref={audiaref} src={track.file} preload='auto' ></audio>
    </div>
  )
}

export default App