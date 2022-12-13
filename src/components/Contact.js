import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import "../style/contact.css";

// FaTwitter

import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="con">
      <div>
        <h1 className="conh">Contact</h1>
        <div>
          <h2>
            {" "}
            <PhoneIcon
              // color="secondary"
              className="con_ico"
              sx={{ fontSize: 30 }}
            />
            Contact Number - 7908035551
          </h2>
          <h2>
            {" "}
            <EmailIcon className="con_ico" sx={{ fontSize: 30 }} />
            Email Address - dasmoumita.me@gmail.com
          </h2>
          <h2>
            <PlaceIcon className="con_ico" sx={{ fontSize: 30 }} />
            Address - Durgapur,WestBengal
          </h2>
          <div className="condiv">
            <a
              href="https://www.linkedin.com/in/moumita-das07/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedin className="icn" />
            </a>

            <a
              href="https://github.com/Moumita7"
              target="_blank"
              rel="noreferrer"
              className="icon-colour"
            >
              <AiFillGithub />
            </a>

            {/* <AiFillInstagram/> */}
            <a
              href="https://twitter.com/Moumita86952918"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
