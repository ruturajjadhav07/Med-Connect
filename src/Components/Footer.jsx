import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import supabase from "../Config/SupabaseCon";

const Footer = () => {
  const [form, setForm] = useState({ email: "", query: "" });

  const submit = async () => {
    if (!form.email) {
      alert("Please enter your email");
      return;
    }

    if (!form.query) {
      alert("Empty query cannot submitted");
      return;
    }

    const { data, error } = await supabase
      .from("userquery")
      .insert([{ email: form.email, query: form.query }]);

    if (error) {
      alert("Something went wrong");
    } else {
      alert("Submitted Successfully");
      setForm({ email: "", query: "" });
    }
  };
  const year = new Date().getFullYear();

  return (
    <div className="bg-light mt-2" style={{ fontFamily: "Sans serif " }}>
      <footer className="container col-md-10 p-2">
        <div className="row">
          <div className="col-md-8 d-flex">
            <div className="col-md-6">
              <h3>Section</h3>
              <ul>
                <li>
                  <a href="#home" className="text-decoration-none text-dark">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-decoration-none text-dark"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-6"><h3>Section</h3></div> */}
          </div>
          <div className="col-md-4">
            <h3 className="text-center">Share Your Query</h3>
            <div className="">
              <input
                className="form-control mb-2"
                placeholder="Enter Your Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                className="form-control mb-2"
                placeholder="Enter Your Query"
                type="text"
                value={form.query}
                onChange={(e) => setForm({ ...form, query: e.target.value })}
                required
              />
              <button className="btn btn-primary w-100" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-2">
              &copy; {year}{" "}
              <a href="" className="text-decoration-none">
                <span className="text-success">Med Connect</span>
              </a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                className="bi bi-linkedin text-dark fs-4"
                href="https://www.linkedin.com/in/ruturaj-jadhav-0a250821b/"
                aria-label="LinkedIn"
                target="_blank"
              ></a>
              <a
                className="bi bi-github text-dark fs-4"
                href="https://github.com/ruturajjadhav07"
                aria-label="GitHub"
                target="_blank"
              ></a>
              <a
                className="bi bi-twitter-x text-dark fs-4"
                href="https://x.com/spoiidermon"
                aria-label="Twitter"
                target="_blank"
              ></a>
              <a
                className="bi bi-instagram text-dark fs-4"
                href="https://www.instagram.com/ruturajj_0  7/"
                aria-label="Instagram"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
