import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Features from "./Features";

const Main = () => {
  let navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div>
      <div
        className="container col-md-10 d-flex flex-column p-2"
        style={{ fontFamily: "monospace", marginTop: "30px" }}
      >
        <h1 className="text-center my-3">
          <span
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#dc3545",
              textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            Find Care, Anywhere <br /> Your Health, Your Map!
          </span>
        </h1>

        {/* Description */}
        <p className="text-center fs-4 mx-2 my-4">
          🏥{" "}
          <strong>
            Welcome to <span className="text-success">Med Connect</span> 💊
          </strong>
          <br />
          Find nearby medical stores instantly with smart search & Google Maps
          navigation.
          <br />
          <strong>
            Helping you locate pharmacies & essential medical supplies with
            ease!
          </strong>
        </p>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-outline-success rounded-pill px-4 py-2 fs-5 d-flex align-items-center justify-content-center my-2 shadow"
            onClick={search}
          >
            🚀 Get Started
          </button>
        </div>
       
      </div>
      <Features />
    </div>
  );
};

export default Main;
