import React from "react";
// import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="m-4">
      <div>
        <h4>Difference between authorization and authentication</h4>
        <div className="ans-container">
          <strong>1. </strong> Authentication determines whether users are who
          they claim to be while Authorization determines what users can and
          cannot access.
          <br />
          <strong>2. </strong> In authentication process, users or persons are
          verified. While in Authorization process, users or persons are
          validated. <br />
          <strong>3. </strong> After authorization authentication usually done.
          <br />
          Authentication transmits info through an ID Token and authorization
          transmits info through an Access Token
        </div>
      </div>
      <div>
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          Firebase is easy and secure to use. It is most reliable and popular.
        </p>
        <p>
          Without firebase by setting up android environment and generating Web
          client ID and SHA1 key for Sign up authentication can be used.
        </p>
      </div>
      <div>
        <h4>
          What other services does firebase provide other than authentications
        </h4>
        <p>
          <b>
            Firebase top functionalities:
            <br />{" "}
          </b>
          <div className="ans-container">
            <strong>1. </strong> Firebase Cloud Firestore. <br />
            <strong>2. </strong> Firebase Cloud Storage
            <br />
            <strong>3. </strong> Firebase Remote Config
            <br />
            <strong>4. </strong> Firebase Database
            <br />
            <strong>5. </strong> Firebase Cloud Messaging.
            <br />
            <strong>6. </strong> Google Analytics.
            <br />
            <strong>7. </strong> Hosting.
          </div>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Blogs;
