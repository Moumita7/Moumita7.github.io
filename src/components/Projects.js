import React from 'react'
import ProjectCard from './ProjectCard'
import "../style/project.css"
import { Heading } from '@chakra-ui/react'


const Projects = () => {
  return (
    <div className='projects' id='projectID'>
    {/* <h2 className='pro'>Projects</h2> */}
    <Heading className='pro'as={"h1"}  fontWeight={"medium"} fontSize="3xl" >Projects
</Heading>
   <ProjectCard/>
    
    
    </div>
  )
}

export default Projects