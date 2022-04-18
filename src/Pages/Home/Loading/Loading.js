import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="w-50 justify-content-center align-items-center mx-auto">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Loading;
