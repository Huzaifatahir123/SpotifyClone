import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Displayhome from './Displayhome'
import Displayalbum from './Displayalbum'
const Display = () => {
  return (
    <div className=' w-screen  '>
        <Routes>
            <Route path='/' element = {<Displayhome />} />
            <Route path='/album/:id' element = {<Displayalbum />} />
        </Routes>
    </div>
  )
}

export default Display