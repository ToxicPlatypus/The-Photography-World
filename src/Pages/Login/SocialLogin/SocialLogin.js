import React from "react";
import { Button } from "react-bootstrap";
import fbLogo from "../../../Images/fb.png";
import googleLogo from "../../../Images/google.png";
import githubLogo from "../../../Images/github.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Home/Loading/Loading";

const SocialLogin = () => {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loadingGoogle || loadingGithub) {
    return <Loading></Loading>;
  }

  if (error || errorGoogle || errorGithub) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user || userGoogle || userGithub) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <div>
        {errorElement}
        <Button
          onClick={() => signInWithFacebook()}
          variant="secondary"
          type="submit"
        >
          <img style={{ width: "30px" }} src={fbLogo} alt="" />
          <span className="px-2">FaceBook Sign In</span>
        </Button>

        <Button onClick={() => signInWithGoogle()} variant="info" type="submit">
          <img style={{ width: "30px" }} src={googleLogo} alt="" />
          <span className="px-2 text-white">Google Sign In</span>
        </Button>
        <Button
          onClick={() => signInWithGithub()}
          variant="warning"
          type="submit"
        >
          <img style={{ width: "30px" }} src={githubLogo} alt="" />
          <span className="px-2">GitHub Sign In</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
