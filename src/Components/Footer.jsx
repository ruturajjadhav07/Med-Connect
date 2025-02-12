import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="text-center position-absolute bottom-0 start-50 translate-middle-x w-100">
      <div className="row">
        <div className="container col-md-10">
          <hr />
          <div className="d-flex justify-content-between fs-4">
            <p className="">
              &copy; 2025 <span className="text-success">Med Connect</span>
            </p>
            <p className="d-flex gap-2">
              <a className="bi bi-linkedin text-muted" href="" />
              <a className="bi bi-github text-muted" href="" />
              <a className="bi bi-twitter-x text-muted" href="" />
              <a className="bi bi-instagram text-muted" href="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
