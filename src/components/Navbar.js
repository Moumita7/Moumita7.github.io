import React, { useRef, useState } from 'react'
import {Link} from "react-scroll"
import {GiHamburgerMenu} from "react-icons/gi"
import{RxCross2} from "react-icons/rx"
import "../style/navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const navCont = [{ to:"homeID", text: "HOME", id:1 }, { to:"aboutID", text:"ABOUT", id:2 }, { to:"skillsID", text:"SKILLS", id:3 }, { to:"projectsID", text:"PROJECTS", id:4 }, {to:"contactID", text:"CONTACT", id:5}, {to:"githubID", text:"GITHUB", id:6} ];


  
    const navCont = [{to:"homeID",text:"Home",id:1},{ to:"aboutID", text:"About", id:2 },{ to:"projectID", text:"ProjectCard", id:3 },{ to:"techID", text:"TechStack", id:4 } ,{ to:"contactID", text:"Contact", id:5 }];
    return (
      <div className="Navbar">
        <span className="nav-logo"> @MD</span>
        <div className={`nav-items ${isOpen && "open"}`}>

          <div className="NavRow">
          {
                    navCont.map((ele) => {
                        return (
                            <Link key={ ele.id } className="nav-cont" to={ ele.to } spy={true} smooth={true} ><p>{ ele.text }</p></Link>
                        )
                    })
                }
            <button className='resbtn'><a style={{color:"white",textDecoration:"none",marginBottom:"10px"}} href='MoumitaDas.pdf' download="MoumitaDas.pdf">Resume</a></button>
            {/* <GiHamburgerMenu/> */}
            {/* <RxCross2/> */}
           
        </div>

       
     
    
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    );
}

export default Navbar







// import "../style/navbar.css"

// import { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';
// import { Link } from 'react-scroll';
// import { FaMoon, FaSun } from "react-icons/fa";
// // import img from "../images/dp.jpg"


// const Navbar = () => {
//     const { Themes, currentTheme, handleChangeTheme } = useContext(ThemeContext);
//     const navCont = [{ to:"homeID", text: "HOME", id:1 }, { to:"aboutID", text:"ABOUT", id:2 }, { to:"skillsID", text:"SKILLS", id:3 }, { to:"projectsID", text:"PROJECTS", id:4 }, {to:"contactID", text:"CONTACT", id:5}, {to:"githubID", text:"GITHUB", id:6} ];


//     return (
//         <>
//         <div className="Navbar"  style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
            
//             <div className="NavRow">
    
//                 {
//                     navCont.map((ele) => {
//                         return (
//                             <Link key={ ele.id } className="nav-cont" to={ ele.to } spy={true} smooth={true} ><p>{ ele.text }</p></Link>
//                         )
//                     })
//                 }
//                <div className="onlySmallScreen">Moumita Das</div>
//                <div className="profilepic">
//         <img src="https://avatars.githubusercontent.com/u/97180521?v=4" alt="mou" />
//         <h3>Moumita Das</h3>
//       </div>
//             </div>
            
//             </div>




//             <div className="theme-cont">
//             <div style={ currentTheme === "light" ? Themes.light.themebtn : Themes.dark.themebtn } className="theme-btn" onClick={ handleChangeTheme }>
//                   {
//                       currentTheme === "light" ? <FaMoon/> : <FaSun/>
//                   }
//             </div>
//             </div>
        
//         </>
//     )
// }

// export default Navbar







// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// // import logo from "../Assets/logo.png";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { MdOutlineContactMail } from "react-icons/md";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/">
//           {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Projects
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <MdOutlineContactMail style={{ marginBottom: "2px" }} /> Contact
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item className="fork-btn">
//               <Button
//                 href="https://github.com/harshmehta813/Portfolio"
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;












// import React from 'react'
// import { Link } from "react-scroll";
// import $ from 'jquery';
// import "../style/navbar.css"


// import Aos from "aos"
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'


// function Navbar() {
//     useEffect(() =>{
//       Aos.init({
//         duration : 1000
//       })
//     },[])
//     window.addEventListener('scroll', () => {
//         if(window.scrollY > 20){
//             $('.nav').addClass("nav-sticky");
//             $('.nav-mobile').addClass("nav-mobile-sticky");
//         }else{
//             $('.nav').removeClass("nav-sticky");
//             $('.nav-mobile').removeClass("nav-mobile-sticky");
//         }
//         if(window.scrollY > 500){
//             $('.scroll-up-btn i').addClass("show");
//         }else{
//             $('.scroll-up-btn i').removeClass("show");
//         }
//       });

//     const toggle = () =>{
//         $('.nav').toggleClass("nav_active");
//         $('.nav-mobile-btn span i').toggleClass("btn_active");
//     }
//     const navclose = () =>{
//         $('.nav').toggleClass("nav_active");
//         $('.nav-mobile-btn span i').toggleClass("btn_active");
//     }

//     const top = () =>{
//         $('html').animate({scrollTop: 0})
//     }
//     return (
//         <>
//             <nav>
//                 <div className="nav">
//                 <Link to="Home" offset={-150} ><h2>Portfo<span>lio.</span></h2></Link>
//                 <ul>
//                     <li><Link to="Home" activeClass='active' offset={-150} spy={true} onClick={navclose}><i className='fas fa-home' ></i>Home</Link></li>
//                     <li><Link to="About" activeClass='active' offset={-100} spy={true} onClick={navclose}><i className='fas fa-user' ></i>About</Link></li>
//                     <li><Link to="Services" activeClass='active' offset={-100} spy={true}  onClick={navclose}><i className='fas fa-cogs' ></i>Services</Link></li>
//                     <li><Link to="Project" activeClass='active' offset={-100} spy={true}  onClick={navclose}><i className='fas fa-archive' ></i>Projects</Link></li>
//                     <li><Link to="Contact" activeClass='active' offset={-100} spy={true}  onClick={navclose}><i className='fas fa-envelope' ></i>Contact</Link></li>
//                 </ul>
//                 </div>
//                 <div className="nav-mobile" >
//                     <Link to="Home" offset={-150} ><h2>Portfo<span>lio.</span></h2></Link>
//                     <div className="nav-mobile-btn" onClick={toggle}>
//                     <span><i className='fas fa-bars'></i></span>
//                     </div>
//                 </div>
//             </nav>
//             <div className='nav-space'></div>
//             <div className="scroll-up-btn" onClick={top}>
//                 <i className="fas fa-angle-up" ></i>
//             </div>
//         </>
//     )
// }

// export default Navbar




