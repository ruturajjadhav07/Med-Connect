import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
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
            Sign Up
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

            <div className="text-center mt-2">
              <p>
                Already have an account?{" "}
                <a
                  href="/signin"
                  style={{ color: "#74C9C0", textDecoration: "none" }}
                >
                  Sign In
                </a>
              </p>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
