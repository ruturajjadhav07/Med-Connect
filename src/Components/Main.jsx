import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

const Main = () => {
  let navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div
      className="container col-md-10 text-white"
      style={{ fontFamily: "monospace", marginTop: "100px" }}
    >
      <h1 className="text-center mt-4">
        🏥 Welcome to <span style={{ color: "#28a745" }}>Med Connect</span> 💊
      </h1>
      <p className="text-center fs-4 mx-2 my-4">
        Find nearby medical stores and pharmacies instantly with{" "}
        <strong>
          <span style={{ color: "#28a745" }}>Med Connect</span>
        </strong>
        <br />
        Find medical stores and pharmacies near you.
        <br />
        Allow location access or enter a place to search instantly!
      </p>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-outline-success rounded d-flex align-items-center justify-content-center"
          onClick={search}
        >
          Get Started
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
