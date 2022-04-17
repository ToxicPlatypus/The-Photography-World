import React from "react";
import "./Home.css";
import Service from "../Service/Service";
import image1 from "../../../Images/1.jpg";
import image2 from "../../../Images/2.jpg";
import image3 from "../../../Images/3.jpg";
import image4 from "../../../Images/4.jpg";
import image5 from "../../../Images/5.jpg";
import image6 from "../../../Images/6.jpg";
import Banner from "../Banner/Banner";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Service></Service>
      <h1> Photos Gallery</h1>
      <div id="gallery" className="home-img">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </>
  );
};

export default Home;
