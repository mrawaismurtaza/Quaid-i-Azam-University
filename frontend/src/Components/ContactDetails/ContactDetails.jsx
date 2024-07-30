import React from "react";
import "./ContactDetails.css";

function ContactDetails() {
  return (
    <div className="ContactDetails">
      <div class="hold">
          <div class="item">
            <address>
              <ul>
                <li>
                  <strong class="title"> QAU</strong>
                  <span>
                    Quaid-i-Azam University Islamabad, 45320, Pakistan.{" "}
                  </span>
                </li>
                <li>
                  <strong class="title">Call Us</strong>
                  <span>+92-51 9064 0000</span>
                </li>
                <li>
                  <strong class="title">Email</strong>
                  <a href="/">info@qau.edu.pk</a>
                </li>
              </ul>
            </address>
          </div>
          <div class="item">
            <address>
              <ul>
                <li>
                  <strong class="title"> Admissions Section</strong>
                  <span>
                    Quaid-i-Azam University Islamabad, 45320, Pakistan.{" "}
                  </span>
                </li>
                <li>
                  <strong class="title">Call Us</strong>
                  <span>+92-51-90642020, +92-51-90643265</span>
                </li>
                <li>
                  <strong class="title">Email</strong>
                  <a href="/">admissions@qau.edu.pk</a>
                </li>
              </ul>
            </address>
          </div>
          <div class="item">
            <address>
              <ul>
                <li>
                  <strong class="title"> Examination Section</strong>
                  <span>
                    Quaid-i-Azam University Islamabad, 45320, Pakistan.{" "}
                  </span>
                </li>
                <li>
                  <strong class="title">Call Us</strong>
                  <span>+92-51 9064-4082</span>
                </li>
                <li>
                  <strong class="title">Email</strong>
                  <a href="/">exams@qau.edu.pk</a>
                </li>
              </ul>
            </address>
          </div>
      </div>
    </div>
  );
}

export default ContactDetails;
