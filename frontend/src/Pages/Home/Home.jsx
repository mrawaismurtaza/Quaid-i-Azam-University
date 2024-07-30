import React, { useState } from "react";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Map from "../../Components/Map/Map.jsx";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import ContactDetails from "../../Components/ContactDetails/ContactDetails.jsx";
import Message from "../../Components/MessageSec/Message.jsx";
import Article from "../../Components/Articles/Article.jsx";
import Event from "../../Components/Events/Event.jsx";
import Why from "../../Components/WhyQAU/Why.jsx";

function Home() {
  const [show, setShow] = useState(0);

  const handleMapClick = () => {
    setShow((prevShow) => (prevShow === 1 ? 0 : 1));
  };

  const handleDetailsClick = () => {
    setShow((prevShow) => (prevShow === 2 ? 0 : 2));
  };

  return (
    <div className="Home">
      <Navbar />
      <Carousel />
      <div className="Map-Contact">
        <div className="item-Map" onClick={handleMapClick}>
          <CiLocationArrow1 />
        </div>
        <div className="item-Contact" onClick={handleDetailsClick}>
          <MdOutlinePhoneInTalk />
        </div>
      </div>
      <div className="content">
        <div className={show === 1 ? "d-block" : "d-none"}>
          <Map />
        </div>
        <div className={show === 2 ? "d-block" : "d-none"}>
          <ContactDetails />
        </div>
      </div>

      <Message />

      <Article/>

      <Event/>

      <Why/>
    </div>
  );
}

export default Home;
