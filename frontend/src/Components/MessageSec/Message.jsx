import React from 'react';
import "./Message.css";
import Portfolio from "../../Assets/Images/Portfolio Picture.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { SiSemanticscholar } from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
import { CiAirportSign1 } from "react-icons/ci";
import { FaUnderline } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { TbChevronsRight } from "react-icons/tb";

function Message() {
  return (
    <div className="Message">
        <div className="Chancellor">
            <p className='title'>Message From Vice Chancellor</p>
            <div>
                <img src={Portfolio} alt="" />
                <p className='message'>I am delighted to welcome you all to the official website of Quaid-i-Azam University. Islamabad, the top ranked Institution of the country. As the Vice Chancellor of this esteemed institution, I am proud to serve alongside a team of dedicated academics and professionals committed to advancing knowledge and fostering a culture of excellence.</p>
            </div>
            <p className='message'>Quaid-i-Azam University is renowned for its academic rigor, cutting-edge research, and vibrant campus life. Our faculty members are experts in their fields, and our students are among the best and brightest in the country. We take great pride in our research, which addresses some of the most pressing issues facing society today…. </p>
        </div>
        <div className="Links">
            <div className="item-1">
                <ul>
                    <li><span><FaRegArrowAltCircleRight/></span> Apply Online</li>
                    <li><span><CiDollar/></span> Fee Structure</li>
                    <li><span><SiSemanticscholar/></span> Scholarships</li>
                    <li><span><GiArchiveResearch/></span> Research Repository</li>
                    <li><span><CiAirportSign1/></span> Foreign Students</li>
                </ul>
            </div>
            <div className="item-2">
                <ul>
                    <li><span><FaUnderline/></span> UnderGraduate</li>
                    <li><span><FaBookOpen/></span> Lateral Entry</li>
                    <li><span><FaBookOpen/></span> MPhil/MS Programme</li>
                    <li><span><PiStudentFill/></span> PhD Programme</li>
                    <li><span><TbChevronsRight/></span> Facilities @QAU</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Message