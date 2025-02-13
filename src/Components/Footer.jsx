import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto py-3 text-center">
      <div className="container">
        <hr className="border-light" />
        <p className="mb-2">&copy; {year} <span className="text-success">Med Connect</span></p>
        <div className="d-flex justify-content-center gap-3">
          <a className="bi bi-linkedin text-light fs-4" href="#" aria-label="LinkedIn"></a>
          <a className="bi bi-github text-light fs-4" href="#" aria-label="GitHub"></a>
          <a className="bi bi-twitter-x text-light fs-4" href="#" aria-label="Twitter"></a>
          <a className="bi bi-instagram text-light fs-4" href="#" aria-label="Instagram"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
