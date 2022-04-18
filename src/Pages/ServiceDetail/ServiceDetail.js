import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";
import thanks from "../../Images/thanks.png";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <img className="w-50 mt-4" src={thanks} alt="" />
      <div className="text-center w-25 mx-auto">
        <Link to="/checkout">
          <button className="btn btn-success">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
