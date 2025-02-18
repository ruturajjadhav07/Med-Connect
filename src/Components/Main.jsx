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
        id="home"
        style={{ fontFamily: "Sans serif " }}
      >
        <h1 className="text-center" style={{ marginTop: "60px" }}>
          <span
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#FF6B6B",
              textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            Find Care, Anywhere <br /> Your Health, Your Map!
          </span>
        </h1>

        {/* Description */}
        <p className="text-center fs-4 mx-2 my-4 p-3 rounded">
          🏥{" "}
          <strong>
            Welcome to{" "}
            <span className="text-success" style={{ color: "#77DD77" }}>
              Med Connect
            </span>{" "}
            💊
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
            className="btn rounded-pill px-4 py-2 fs-5 d-flex align-items-center justify-content-center my-2 shadow"
            onClick={search}
            style={{
              backgroundColor: "#A8DADC",
              color: "#1D3557",
              border: "none",
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#CB9DF0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#A8DADC")}
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
