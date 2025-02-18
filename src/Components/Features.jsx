import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Features = () => {
  return (
    <div>
      <div className="container p-4 col-md-10" id="features" style={{ fontFamily: "Sans serif " }}>
        <h1
          className="text-center fw-bold m-4"
          style={{
            fontSize: "2.5rem",
            textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
          }}
        >
          Key Features
        </h1>
        <div className="row g-4">
          <div className="col-sm-12 col-md-6 col-lg-3" >
            <div className="card shadow p-4 h-100" >
              <div className="card-body text-center" >
                <h3>🔍</h3>
                <h3 className="card-title fw-bolder">
                  Real-Time Location Search
                </h3>
                <p className="card-text">
                  Find nearby hospitals, clinics, and pharmacies instantly based
                  on your current location.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card shadow p-4 h-100">
              <div className="card-body text-center">
                <h3>🗺️</h3>
                <h3 className="card-title fw-bolder">Interactive Map View</h3>
                <p className="card-text">
                  View medical facilities on a map with clickable markers for
                  details and directions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card shadow p-4 h-100">
              <div className="card-body text-center">
                <h3>🚑</h3>
                <h3 className="card-title fw-bolder">
                  24/7 Emergency Hospital Finder
                </h3>
                <p className="card-text">
                  Quickly locate the nearest emergency care facility at any
                  time, day or night.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card shadow p-4 h-100">
              <div className="card-body text-center">
                <h3>👩‍⚕️</h3>
                <h3 className="card-title fw-bolder">24/7 Dedicated Support</h3>
                <p className="card-text">
                  Round-the-clock assistance from healthcare professionals and
                  AI-driven help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
