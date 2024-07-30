import React from "react";
import "./Why.css";
import background from "../../Assets/Images/Quade Azam uni Back.jpg";

function Why() {
  return (
    <div className="Why">
      <div className="image-container">
        <img src={background} alt="Background" />
      </div>
      <div className="text-container">
        <h1>Why QAU?</h1>
        <div className="grid-container">
          <div className="grid-item">
            <p>Established In</p>
            <p>1967</p>
          </div>
          <div className="grid-item">
            <p>Campus Students</p>
            <p>11000+</p>
          </div>
          <div className="grid-item">
            <p>PhD Faculty</p>
            <p>90% of Faculty</p>
          </div>
          <div className="grid-item">
            <p>Departments / Schools</p>
            <p>34</p>
          </div>
          <div className="grid-item">
            <p>Affiliated Colleges</p>
            <p>16</p>
          </div>
          <div className="grid-item">
            <p>Institutes / Centres</p>
            <p>6</p>
          </div>
          <div className="grid-item">
            <p>MPhil / PhDs</p>
            <p>36% of students</p>
          </div>
          <div className="grid-item">
            <p>Scholarships (2019-22)</p>
            <p>Rs. 208,437,999</p>
          </div>
          <div className="grid-item">
            <p>Times Higher Education</p>
            <p>400-500th</p>
          </div>
          <div className="grid-item">
            <p>QS Ranking</p>
            <p>363</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
