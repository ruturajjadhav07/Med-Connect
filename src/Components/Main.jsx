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
      style={{ fontFamily: "monospace", marginTop: "30px" }}
    >
      <h1 className="text-center my-3">
        🏥 Welcome to <span style={{ color: "#28a745" }}>Med Connect</span> 💊
      </h1>
      <p className="text-center fs-4 mx-2 my-4">
        <strong>
          Find nearby medical stores and pharmacies instantly with{" "}
          <span className="text-success">Med Connect</span>.
        </strong>
        <br />
        <strong>Smart search and filters</strong> help you find the best options
        by{" "}
        <strong>
          distance, ratings,
          <br /> and availability
        </strong>
        . Integrated with <strong>Google Maps</strong>, it ensures seamless
        navigation.
        <br />{" "}
        <strong>
          Hospitals and clinics coming soon! Stay prepared, stay connected!
        </strong>
      </p>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-outline-success rounded d-flex align-items-center justify-content-center my-2 "
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
