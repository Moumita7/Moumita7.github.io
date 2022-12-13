import React from 'react'
import Routes, { Route } from "react-router-dom"
import About from './About'
import Contact from './Contact'
import NavBar from './Navbar'
import Projects from './Projects'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" exact component={NavBar} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          {/* <Route path="/resume" component={Resume} /> */}
          <Route path="/contact" component={Contact} />
        </Routes>
    </div>
  )
}

export default AllRoutes