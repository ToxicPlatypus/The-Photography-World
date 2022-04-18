import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    // console.log(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const navigateRegister = (event) => {
    navigate("/register");
  };

  return (
    <div>
      <h2 className="text-primary text-center mt-4">Login Please</h2>
      <div className="w-50 mx-auto">
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I accept the terms and services"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <p>
          New here?{" "}
          <Link
            to="/register"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
