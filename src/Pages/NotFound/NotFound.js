import React from "react";
import "./NotFound.css";
import notFound from "../../Images/404.jpg";

const NotFound = () => {
  return (
    <div className="image">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
