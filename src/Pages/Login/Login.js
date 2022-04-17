import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // console.log(email, password);
  };

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
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I accept the terms and services"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
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
      </div>
    </div>
  );
};

export default Login;