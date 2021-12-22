import React from "react";
import "./GetHelp.css";

function GetHelp() {
  return (
    <div className="documentationContainer">
      <h1 className="gettingStarted">Getting Started</h1>
      <p className="projectDesc">Bank appointment Booking using Reactjs. </p>
      <h2>
        <strong>Dependencies Used</strong>{" "}
      </h2>
      <p>
        <span>
          1) <strong>axios : </strong>
        </span>{" "}
        Transform request and response data
      </p>
      <p>
        <span>
          2) <strong>json-server : </strong>
        </span>{" "}
        Creates a full fake REST API
      </p>
      <p>
        <span>
          3) <strong>concurrent : </strong>
        </span>{" "}
        Run multiple commands concurrently. For eg:
        <pre>
          <code className="code">
            "dev": "concurrently \"npm start\" \"npm run json-server\""
          </code>
        </pre>
      </p>
      <h2>
        <strong>Project Configuration</strong>{" "}
      </h2>
      <p>
        <span>
          1) <strong>Install all Dependencies </strong>
        </span>{" "}
        <pre>
          <code className="code">npm install</code>
        </pre>
      </p>

      <p>
        <span>
          2) <strong>Run the Project</strong>
        </span>{" "}
        <pre>
          <code className="code">npm run dev</code>
        </pre>
      </p>
      <span>Thank you.</span>
    </div>
  );
}

export default GetHelp;
