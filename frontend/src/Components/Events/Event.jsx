import React from "react";
import "./Event.css";

function Event() {
  return (
    <>
      <div className="heading">
        <h3>Events</h3>
      </div>
      <div className="Event">
        <div class="event-box">
          <div class="event-thumb">
            <a href="https://qau.edu.pk/events/100-free-courses-with-100-free-international-certification/">
              <i class="fas fa-link"></i>
            </a>
            <img
              width="360"
              height="210"
              src="https://qau.edu.pk/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-21-at-12.19.55-360x210.jpeg"
              class="attachment-gramotech-events-grid size-gramotech-events-grid wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
            />{" "}
          </div>

          <div class="event-excerpt">
            <p>
              {" "}
              <a href="https://qau.edu.pk/events/100-free-courses-with-100-free-international-certification/">
                100% FREE Courses with 100% Free International Certification
                ..... Read More &gt;&gt;{" "}
              </a>{" "}
            </p>
          </div>
        </div>
        <div class="event-box">
          <div class="event-thumb">
            <a href="https://qau.edu.pk/events/qau-career-entrepreneurship-expo-2024/">
              <i class="fas fa-link"></i>
            </a>
            <img
              width="360"
              height="210"
              src="https://qau.edu.pk/wp-content/uploads/2024/05/532024event-360x210.jpg"
              class="attachment-gramotech-events-grid size-gramotech-events-grid wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
            />{" "}
          </div>

          <div class="event-excerpt">
            <p>
              {" "}
              <a href="https://qau.edu.pk/events/qau-career-entrepreneurship-expo-2024/">
                QAU Career &amp; Entrepreneurship Expo 2024 ..... Read More
                &gt;&gt;{" "}
              </a>{" "}
            </p>
          </div>
        </div>
        <div class="event-box">
          <div class="event-thumb">
            <a href="https://qau.edu.pk/events/international-symposium-on-the-buddhist-heritage-of-gandhara/">
              <i class="fas fa-link"></i>
            </a>
            <img
              width="360"
              height="210"
              src="https://qau.edu.pk/wp-content/uploads/2024/03/21032024-360x210.jpg"
              class="attachment-gramotech-events-grid size-gramotech-events-grid wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
            />{" "}
          </div>

          <div class="event-excerpt">
            <p>
              {" "}
              <a href="https://qau.edu.pk/events/international-symposium-on-the-buddhist-heritage-of-gandhara/">
                International Symposium on the Buddhist Heritage of Gandhara
                ..... Read More &gt;&gt;{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
