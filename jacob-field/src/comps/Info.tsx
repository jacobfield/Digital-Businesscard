import * as React from "react";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";
export function Info() {
  return (
    <div className="info-container">
      <p>Phone Number:</p>
      <p>Email address:</p>
      <p>Portfolio:</p>
      <p>Location:</p>
      <p>Social media links:</p>
    </div>
  );
}
