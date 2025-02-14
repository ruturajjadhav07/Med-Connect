import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-light mt-2">
      <footer className="container col-md-10 p-2">
        <div className="row">
          <div className="col-md-8 d-flex">
            <div className="col-md-6">
              <h3>Section</h3>
              <ul>
                <li>Home</li>
                <li>Features</li>
              </ul>
            </div>
            {/* <div className="col-md-6"><h3>Section</h3></div> */}
          </div>
          <div className="col-md-4">
            <h3>Share Your Query</h3>
            <div className="d-flex gap-2">
              <input
                className="form-control"
                placeholder="Enter Query"
                type="text"
              />
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-2">
              &copy; {year} <span className="text-success">Med Connect</span>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                className="bi bi-linkedin text-dark fs-4"
                href="#"
                aria-label="LinkedIn"
              ></a>
              <a
                className="bi bi-github text-dark fs-4"
                href="#"
                aria-label="GitHub"
              ></a>
              <a
                className="bi bi-twitter-x text-dark fs-4"
                href="#"
                aria-label="Twitter"
              ></a>
              <a
                className="bi bi-instagram text-dark fs-4"
                href="#"
                aria-label="Instagram"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
