import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };
  return (
    <div className="registration-form">
      <h1 className="reg-text">Registration Form</h1>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Email Address" required />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <input className="submit-btn" type="submit" value="Register" />
      </form>

      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
