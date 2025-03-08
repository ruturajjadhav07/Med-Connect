import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

import logo from "/src/assets/logo.jpg";
import Main from "./Main";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   document.body.style.backgroundColor = isDarkMode ? "black" : "white";
  //   document.body.style.color = isDarkMode ? "white" : "black";
  // }, [isDarkMode]);

  return (
    <div>
      <div className="bg-light sticky-top" style={{ fontFamily: "Sans serif " }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand d-flex align-items-center" href="/">
                <img
                  src={logo}
                  alt="Logo"
                  width="30"
                  height="30"
                  className="m-1"
                />
                Med Connect
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link active btn"
                      onClick={() => navigate("/signin")}
                    >
                      Sign In
                    </button>
                  </li>
                  {/* Theme Toggle Icon */}
                  {/* <li className="nav-item">
                    <button
                      className="nav-link active btn border-0"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                      <i className={`bi ${isDarkMode ? "bi-moon" : "bi-brightness-high"}`}></i>
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <hr className="m-0 border-secondary" />
      </div>
      <Main />
    </div>
  );
};

export default Navbar;
