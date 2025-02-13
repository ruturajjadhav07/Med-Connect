import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="py-3 fixed-bottom fs-5">
      <div className="container text-center">
        <hr className="border-light" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; 2025 <span className="text-success">Med Connect</span>
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center gap-3">
            <a className="bi bi-linkedin text-light" href="#" aria-label="LinkedIn"></a>
            <a className="bi bi-github text-light" href="#" aria-label="GitHub"></a>
            <a className="bi bi-twitter-x text-light" href="#" aria-label="Twitter"></a>
            <a className="bi bi-instagram text-light" href="#" aria-label="Instagram"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
