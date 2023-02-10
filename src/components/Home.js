import React from 'react'
import "../style/home.css"
import img from "../images/pic.png"
import { Button } from '@chakra-ui/react'
// import Typewriter from 'typewriter-effect';
// import { Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className='intro' id='homeID'>
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
        
            {/* <Heading as="h3" fontWeight={"small"}> */}
            <h3>
            I am very passionate to create Interactive websites.
            {/* </Heading> */}
            </h3>
            {/* <button className='resbtn'><a style={{color:"white",textDecoration:"none"}} href='MoumitaDas.pdf' download="MoumitaDas.pdf">Resume</a></button> */}
            <Button mt="10px"  color={"white"} bg=" #693ac0" alignItems="center" pt="10px" onClick={() =>window.open(
                      "https://drive.google.com/file/d/14YOuTrCyX6ayfn7PeyO_2kLxGa8l7PK_/view?usp=sharing")}><a style={{color:"white",textDecoration:"none",marginBottom:"10px"}} href='MoumitaDas.pdf' download="MoumitaDas.pdf">Resume</a>
        </Button>
            </div>
            

            </div>
        </div>
        <div className="intro-right">
            <img className='img-first' src={img} alt="" />
        </div>

    </div>
  )
}

export default Home