import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./Search";
import Footer from "./Footer"; 

const Main = () => {
  return (
    <div className="container col-md-10" style={{ fontFamily: "Caveat, cursive" ,marginTop:"100px"}}>
      <h1 className="text-center mt-4">
        🏥 Welcome to <span style={{ color: "#28a745" }}>Med Connect</span> 💊
      </h1>
      <p className="text-center fs-4 mx-2 my-4">
        Find nearby medical stores and pharmacies instantly with{" "}
        <strong>
          <span style={{ color: "#28a745" }}>Med Connect</span>
        </strong>
        <br />
        Find medical stores and pharmacies near you. 
        <br />
        Allow location access or enter a place to search instantly!
      </p>
      <Search />
      
      {/* Add Footer here */}
      <Footer />
    </div>
  );
};

export default Main;
