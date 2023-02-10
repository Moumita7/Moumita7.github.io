



// import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import img from "../images/dp.jpg"
import "../style/about.css"


const About = () => {
  return (
    <div className='a' id='aboutID'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={img} alt="" className='a-img' />
        </div>

      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <Heading className="a-title"  fontWeight={"medium"} fontSize="3xl" >About Me
</Heading> */}
        {/* <h3 className="a-sub"> */}
        <h3 style={{color:"white"}} >

        Hello stranger! 👋, my name is Moumita Das and I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people.
        </h3>
        {/* <h3 className="a-desc"> */}
        <h3 style={{color:"white"}} >


        I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
        </h3>
      </div>
    </div>
  )
}

export default About

