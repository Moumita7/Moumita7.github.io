import React from 'react'
import img1 from "../images/proj1.jpeg"
import myglm from "../images/myglm.jpeg"
import fitness from "../images/fitness.jpeg"
import netflix from "../images/netflix.jpeg"


import "../style/project.css"
import {NavLink, useNavigate} from "react-router-dom"



const ProjectCard = () => {
  const navigate=useNavigate()
  return (
    <div className='cc'>
  

    <div>
    {/* <h3>jmgygki</h3> */}
    <div className='container'>
        <div>
            <img src={img1} alt="jh" />
            <h2>Urbon Club</h2>
            <div className='logos'>
           <div>
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
             <img className='logo_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
             <img className='logo_img' src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" />
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
           </div>
         </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum odit adipisci quasi autem perspiciatis tenetur assumenda, consectetur possimus a deserunt ea accusantium quod officiis nulla doloribus voluptatem natus facere.</p>
            <div className='p_btn'>
         {/* <button className='btn' href="https://incredible-basbousa-aecbd0.netlify.app/">Check it Out!</button> */}
         {/* <button className='btn'>Check it Out!</button> */}
       {/* <NavLink className='btn' to="https://incredible-basbousa-aecbd0.netlify.app/">Check it Out!</NavLink> */}
         <button className='btn'><a a className='aa'  style={{ textDecoration: 'none' }} href="https://stellular-meringue-70bb85.netlify.app/">Check it Out!</a></button>
        <button className='btn'><a className='aa'  style={{ textDecoration: 'none' }} href='https://github.com/Moumita7/foamy-language-9425'>Github Link</a></button>

        </div>
        </div>
       


        <div>
            <img src={myglm} alt="jh" />
            <h2>MyGlam</h2>
            <div className='logos'>
           <div>
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
             <img className='logo_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
             <img className='logo_img' src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" />
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
           </div>
         </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum odit adipisci quasi autem perspiciatis tenetur assumenda, consectetur possimus a deserunt ea accusantium quod officiis nulla doloribus voluptatem natus facere.</p>
            <div className='p_btn'>
            <button className='btn'><a a className='aa'  style={{ textDecoration: 'none' }} href="https://incredible-basbousa-aecbd0.netlify.app/">Check it Out!</a></button>
        <button className='btn'><a className='aa'  style={{ textDecoration: 'none' }} href='https://github.com/Moumita7/foamy-language-9425'>Github Link</a></button>
        </div>
        </div>
{/* 3rd */}

        <div>
            <img src={fitness} alt="jh" />
            <h2>fitness</h2>
            <div className='logos'>
           <div>
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
             <img className='logo_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
             <img className='logo_img' src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" />
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
           </div>
         </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum odit adipisci quasi autem perspiciatis tenetur assumenda, consectetur possimus a deserunt ea accusantium quod officiis nulla doloribus voluptatem natus facere.</p>
            <div className='p_btn'>
            <button className='btn'><a a className='aa'  style={{ textDecoration: 'none' }} href="https://incredible-basbousa-aecbd0.netlify.app/">Check it Out!</a></button>
        <button className='btn'><a className='aa'  style={{ textDecoration: 'none' }} href='https://github.com/Moumita7/foamy-language-9425'>Github Link</a></button>

        </div>
        </div>

        {/* 4th */}
        <div>
            <img src={netflix} alt="jh" />
            <h2>netflix</h2>
            <div className='logos'>
           <div>
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
             <img className='logo_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
             <img className='logo_img' src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" />
             <img className='logo_img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
           </div>
         </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum odit adipisci quasi autem perspiciatis tenetur assumenda, consectetur possimus a deserunt ea accusantium quod officiis nulla doloribus voluptatem natus facere.</p>
            <div className='p_btn'>
            <button className='btn'><a a className='aa'  style={{ textDecoration: 'none' }} href="https://incredible-basbousa-aecbd0.netlify.app/">Check it Out!</a></button>
        <button className='btn'><a className='aa'  style={{ textDecoration: 'none' }} href='https://github.com/Moumita7/foamy-language-9425'>Github Link</a></button>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ProjectCard