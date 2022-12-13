import React from 'react'
import "../style/intro.css"
import img from "../images/pic.png"
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="intro-left-wrapper">
            <h2 className='i-intro'>Hi There ! My Name Is </h2>
            <h1 className='i-name'> Moumita Das</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Problem Solver</div>
                    <div className="i-title-item">MERN Stack Devoloper</div>

                </div>
            </div>
            <div className="i-desc">
            <h2>
            I am very passionate to create Interactive websites.
            </h2>
            <button className='resbtn'>Resume</button>

            </div>
            

            </div>
        </div>
        <div className="intro-right">
            <img className='img-first' src={img} alt="" />
        </div>

    </div>
  )
}

export default Intro