import React from "react";

import "./Serve.css";

const Serve = ({ service }) => {
  const { price, image, name, description } = service;
  return (
    <div className="serve">
      <img className="image" src={image} alt="" />
      <h2>{name}</h2>
      <h4>{price}</h4>
      <p>
        <small>{description}</small>
      </p>
      <button className="btn">Book Now</button>
    </div>
  );
};

export default Serve;
