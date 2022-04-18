import React from "react";
import person from "../../Images/person.png";

const About = () => {
  return (
    <div className="w-50 mt-4 mx-auto">
      <div className="card mb-3">
        <img className="card-img-top w-50 mx-auto" src={person} alt="" />
        <div class="card-body">
          <h5 class="card-title ">Mohammad Rafid Rabbi</h5>
          <p class="card-text ">
            My goal is to gain new skills and develop an idea of how I can
            contribute to myself. Also I want to travel my dream places.
            Currently Working hard on that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
