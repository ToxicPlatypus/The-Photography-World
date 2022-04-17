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
    <div className="container">
      {services.map((service) => (
        <Serve key={service._id} service={service}></Serve>
      ))}
    </div>
  );
};

export default Service;
