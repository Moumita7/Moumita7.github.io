



import React from 'react'
import img from "../images/dp.jpg"
import "../style/about.css"


const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={img} alt="" className='a-img' />
        </div>

      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h3 className="a-sub">
        Hello stranger! 👋, my name is Moumita Das and I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people.
        </h3>
        <h3 className="a-desc">
        I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
        </h3>
      </div>
    </div>
  )
}

export default About

