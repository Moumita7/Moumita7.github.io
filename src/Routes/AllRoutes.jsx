import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Project from '../components/Project'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/project' element={<Project/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes