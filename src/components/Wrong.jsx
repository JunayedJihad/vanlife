import React from "react";
import { useRouteError } from "react-router-dom";

const Wrong = () => {
  const error=useRouteError()
  return (
    <div className="main d-flex justify-content-center align-items-center ">
      <div>
        <p style={{ fontSize: "3rem", fontWeight: "bold" }}>Something Went Wrong! 😓 </p>
        <p>{error.message && error.message || "Please try again later."}</p>
      </div>
    </div>
  );
};

export default Wrong;
