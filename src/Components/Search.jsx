import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    navigate("/working");
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100">
      <h1 className="text-success">Med Connect 💊</h1>
      <form className="col-md-4 col-sm-8">
        <input
          type="text"
          className="form-control text-center"
          id="text"
          placeholder="Enter Location near you"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button
          className="btn btn-outline-success rounded mt-2 w-100"
          onClick={submit}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
