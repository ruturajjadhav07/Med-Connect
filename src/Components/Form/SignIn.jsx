import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  let navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center vh-100 px-3"
        style={{ backgroundColor: "#E3F2FD" }}
      >
        <div
          className="p-4 rounded shadow w-100"
          style={{
            maxWidth: "380px",
            backgroundColor: "#FFFFFF",
            border: "2px solid #74C9C0",
          }}
        >
          <h2 className="text-center mb-3" style={{ color: "#1D3557" }}>
            Sign In
          </h2>

          <form>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                style={{
                  backgroundColor: "#F8F9FA",
                  borderColor: "#74C9C0",
                }}
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                style={{
                  backgroundColor: "#F8F9FA",
                  borderColor: "#74C9C0",
                }}
              />
            </div>

            <div className="d-flex justify-content-between mb-3">
              <a
                href="#"
                style={{ color: "#74C9C0", textDecoration: "none" }}
                onClick={signup}
              >
                Sign Up
              </a>
              <a href="#" style={{ color: "#74C9C0", textDecoration: "none" }}>
                Forgot Password?
              </a>
            </div>

            <button
              className="btn w-100 text-white"
              style={{
                backgroundColor: "#77DD77",
                transition: "background-color 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#5BB85B")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#77DD77")}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
