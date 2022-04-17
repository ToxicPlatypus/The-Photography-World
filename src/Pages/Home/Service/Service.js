import React, { useEffect, useState } from "react";
import Serve from "../Serve/Serve";
import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <h1 className="serve-text">Services I provide</h1>
      <div className="container">
        {services.map((service) => (
          <Serve key={service._id} service={service}></Serve>
        ))}
      </div>
    </div>
  );
};

export default Service;
