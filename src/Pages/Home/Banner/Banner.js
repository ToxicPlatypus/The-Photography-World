import { Carousel } from "react-bootstrap";

import banner1 from "../../../Images/Banner/b1.jpg";
import banner2 from "../../../Images/Banner/b2.jpg";
import banner3 from "../../../Images/Banner/b3.jpg";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Get The Best Shot Today</h3>
          <p>
            “If your photos aren’t good enough, then you’re not close enough.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Second slide" />

        <Carousel.Caption>
          <h3>Our Studio</h3>
          <p>
            “We are making photographs to understand what our lives mean to
            us.”.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Travel without photography is nothing</h3>
          <p>
            “It’s one thing to make a picture of what a person looks like, it’s
            another thing to make a portrait of who they are.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
