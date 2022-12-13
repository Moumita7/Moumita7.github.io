import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "../style/calender.css"
const Calender = () => {
    
  // const colourTheme = {
  //   background: "transparent",
  //   text: "#ffffff",
  //   grade4: "#693ac0",
  //   grade3: "#b22ff4",
  //   grade2: "#b265f6",
  //   grade1: "#c084f5",
  //   grade0: "#ecd9fc"
   
  // };
  return (
    <div className="cal">
    <h1 className="hed">Git Calender</h1>
    <div className="ccl">
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="moumita7"
        blockSize={15}
        blockMargin={5}
        // theme={colourTheme}
        fontSize={16}
      
      />
    </Row>
    </div>


    </div>
  );
}

export default Calender