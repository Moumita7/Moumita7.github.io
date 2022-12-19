import React from 'react'
import img1 from "../images/proj1.jpeg"
import {Navigate} from "react-router-dom"

import "../style/project.css"


const Project = () => {
  return (
   
    <>
    <div className='p' >
    <div>
     <div className='pp'>
      <h1>Projects</h1>
      </div>
  
      <div className='p-main'>
        <div className='p_img_div'>
        <div>
          <img className='p_img' src={img1} alt="" />
        </div>
        </div>
        <div style={{marginLeft:"30px"}}>
          <div>
     <div className='pp'>

            <h2>UrbanComany Clone</h2>
            </div>
            <div className='logos'>
           

              <div>
                <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
                <img className='logo_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                <img className='logo_img' src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" />
                <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
              </div>
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero consectetur ipsum maxime delectus voluptatibus. Quisquam aliquid laboriosam, nobis tempore quae nisi iste delectus quod quam eligendi inventore ad officiis.</h3>
            <div className='p_btn'>

              <button>Deploy</button>
              <button>Github</button>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className='pp'>
      <h1>Projects</h1>
      </div>
  
      <div className='p-main'>
        <div className='p_img_div'>
        <div>
          <img className='p_img' src={img1} alt="" />
        </div>
        </div>
        <div style={{marginLeft:"30px"}}>
          <div>
     <div className='pp'>

            <h2>UrbanComany Clone</h2>
            </div>
            <div className='logos'>
           

              <div>
                <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
                <img className='logo_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                <img className='logo_img' src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" />
                <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
              </div>
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero consectetur ipsum maxime delectus voluptatibus. Quisquam aliquid laboriosam, nobis tempore quae nisi iste delectus quod quam eligendi inventore ad officiis.</h3>
            <div className='p_btn'>

              <button >Deploy</button>
              <button>Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
 
  )
}

export default Project