import React from "react";
import "../style/star.css";

const Star = () => {
  return (
    <div className="statsBox">
      <h3 className="st">GitHub Stats</h3>
      <div>
        <div className="str">
          <div style={{ marginTop: "20px" }} className="stats-3">
            <p align="center">
              <a href="https://github.com/moumita7">
                <img
                  className="strimg"
                  align="center"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=moumita7&bg_color=0D1117"
                  alt=""
                />
              </a>
            </p>
          </div>
          <div className="stats-2">
            <p align="center">
              <a href="https://github.com/moumita7">
                <img
                  alt="Moumita Github Stats"
                  className="strimg"
                  src="https://github-readme-stats.vercel.app/api?username=moumita7&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1128"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="strr">
        <div className="statsContainer">
          <div>
            <a href="https://github.com/moumita7">
              <img
                align="left"
                src="https://github-readme-streak-stats.herokuapp.com/?user=moumita7"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Star;
