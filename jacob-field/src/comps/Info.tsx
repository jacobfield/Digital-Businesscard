import * as React from "react";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";
export function Info() {
  return (
    <div className="info-container">
      <div className="info-holder">
        <p>Phone Number:</p>
      </div>
      <div className="info-holder">
        <p>Email address:</p>
      </div>
      <div className="info-holder">
        <p>Portfolio:</p>
      </div>
      <div className="info-holder">
        <p>Location:</p>
      </div>
      <div className="info-holder">
        <p>Social media links:</p>
        <FaLinkedin className="icon" />
        <TiSocialInstagram className="icon" />
        <FaSquareGithub className="icon" />
        <MdOutlineEmail className="icon" />
        <ImProfile className="icon" />
      </div>
    </div>
  );
}
