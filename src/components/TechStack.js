import React from 'react'
import "../style/techstack.css"
const TechStack = () => {
  return (
    <div className='t' id='skillsID'>
    <div>
    <h1 className='title-h'>Tech Stack</h1>
    <div className='main_tech'>
    <h1 className='title'>Frontend</h1>
   
        <div className='frontend'>
       
            <div>
            <h2>JavaScript</h2>

                <img className='fni' src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="" />
            </div>
            <div>
            <h2>React</h2>

                <img className='fni' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            </div>  
             <div>
            <h2>HTML</h2>

               <img className='fni' src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
            </div>  
             <div>
            <h2>CSS</h2>

            <img className='fni' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" alt="" />

            </div>
            <div>
            <h2>BOOTSTRAP</h2>

            <img className='fni' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="" />

            </div>
            <div>
            <h2>Material UI</h2>

            <img className='fni' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Logo_material_design.svg/2560px-Logo_material_design.svg.png" alt="" />

            </div>
        </div>
        <div></div>

    </div>
    {/* backend */}
    <div className='main_tech'>
    <h1 className='title'>Backend</h1>
   
        <div className='backend'>
       
            <div>
            <h2>Node JS</h2>

                <img className='bni' src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
            </div>
            <div>
            <h2>Express JS</h2>

               
                <img className='bni' src="  https://img.icons8.com/ios/512/express-js.png" alt="" />

              
            </div>  
             <div>
            <h2>MongoDB</h2>

               <img className='bni' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/768px-Antu_mongodb.svg.png?20160706123547" alt="" />
            </div>  
             <div>
            <h2>SQL</h2>

            <img className='fni' src="https://www.svgrepo.com/show/13344/sql-file-format.svg" alt="" />

            </div>
           
            
        </div>
        <div></div>

    </div>

    {/* tools */}
    <div className='main_tech'>
    <h1 className='title'>Tools</h1>
   
        <div className='alltools'>
       
            <div>
            <h2>VS Code</h2>

                <img className='tni' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="" />
            </div>
            <div>
            <h2>Git</h2>

                <img className='tni' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="" />
            </div>  
             <div>
            <h2>Postman</h2>

               <img className='tni' src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="" />
            </div>  
            
           
        </div>
        <div></div>

    </div>


    </div>
    </div>
  )
}

export default TechStack