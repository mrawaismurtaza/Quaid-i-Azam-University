import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="Map">
      <iframe
        title="Quaid e Azam University Islamabad Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.5035104048084!2d73.1355460748145!3d33.747652433753764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc11d3571e5bf%3A0x841a9ed6d869644f!2sQuaid%20e%20Azam%20University%20Islamabad!5e0!3m2!1sen!2s!4v1722304760152!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
