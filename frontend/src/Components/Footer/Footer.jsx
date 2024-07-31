import React from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="Container-Sec">
        <div className="About-Item">
          <h3>About QAU</h3>
          <p>
            Quaid-i-Azam University is an international seat of higher, advance,
            intellectual learning that.....
          </p>
          <button className="button">READ MORE</button>
        </div>
        <div className="Why-Item">
          <h3>Why QAU?</h3>
          <ul>
            <li>
              <a href="https://qau.edu.pk/vision-statement/">> Vision</a>
            </li>
            <li>
              <a href="https://qau.edu.pk/mission/">> Mission</a>
            </li>
            <li>
              <a href="https://qau.edu.pk/fees-structure/">> Fee Structure</a>
            </li>
            <li>
              <a href="https://qau.edu.pk/facilities-qau/">> Facilities @QAU</a>
            </li>
            <li>
              <a href="https://qau.edu.pk/core-values-qau/">> Core Values</a>
            </li>
          </ul>
        </div>
        <div className="Info-Item">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="https://qau.edu.pk/life-at-campus/">> Student Affairs</a>
            </li>
            <li>
              <a href="https://qau.edu.pk/financial-assistancescholarships/">
                > Scholarships
              </a>
            </li>
            <li>
              <a href="https://qau.edu.pk/message-from-the-admissions-office/">
                > Admissions
              </a>
            </li>
          </ul>
        </div>
        <div className="Contact-Item">
            <h3 class="widget-title">Contact Us</h3>{" "}
            <address>
              <ul className="ul-item">
                <li>
                  {" "}
                  <FaHome className="icons"/> Quaid-i-Azam University Islamabad,
                  45320, Pakistan.{" "}
                </li>
                <li>
                <FaPhoneAlt className="icons" /> +92-51 9064 0000
                </li>
                <li>
                  <MdEmail className="icons"/> info@qau.edu.pk
                </li>
                <li>
                  <FaGlobe  className="icons"/> qau.edu.pk
                </li>
              </ul>
            </address>
        </div>
      </div>
      <div className="Rights-Sec">
        <p>2023 @ Quaid-i-Azam University . All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
