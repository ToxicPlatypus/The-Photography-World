import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../firebase.init";
import Loading from "../Home/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  if (loading) {
    return <Loading></Loading>;
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="registration-form">
      <h1 className="reg-text">Registration Form</h1>
      <form onSubmit={handleRegister}>
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
