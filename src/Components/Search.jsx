import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Search = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <form className="col-md-4 col-sm-8 col-10">
        <input
          type="text"
          className="form-control text-center"
          id="text"
          placeholder="Enter Location near you"
        />
      </form>
    </div>
  );
};

export default Search;
