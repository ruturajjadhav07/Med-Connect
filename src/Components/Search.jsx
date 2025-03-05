import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const SearchLocation = async (e) => {
    e.preventDefault();

    try {
      const geoUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
        location
      )}&apiKey=${apiKey}`;
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();

      if (geoData.features.length === 0) {
        alert("Location not found!");
        return;
      }

      const { lat, lon } = geoData.features[0].properties;
      //  Fetch hospitals within 5 km radius
      const hospitalUrl = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},5000&bias=proximity:${lon},${lat}&limit=30&apiKey=${apiKey}`;
      const hospitalResponse = await fetch(hospitalUrl);
      const hospitalData = await hospitalResponse.json();

      setData(hospitalData.features);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-4">
      <h1 className="text-success">Med Connect 💊</h1>
      <form className="col-md-4 col-sm-8">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Location near you"
          onChange={handleChange}
          value={location}
        />
        <button
          className="btn btn-outline-success rounded mt-2 w-100"
          onClick={SearchLocation}
        >
          Search
        </button>
      </form>

      {/* Display Hospital Results */}
      {data && (
        <div className="container mt-3 col-md-4">
          <h3 className="text-center">Hospitals Nearby</h3>
          <ul className="list-group">
            {data.map((hospital, index) => {
              const { name, suburb, formatted, lon, lat, details } =
                hospital.properties;
              const phone = details?.contact?.phone || "Not Available";
              const email = details?.contact?.email || "Not Available";
              const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

              return (
                <li key={index} className="list-group-item my-2 border">
                  <strong className="fs-4">{name || "Unknown Hospital"}</strong>
                  <br />
                  {suburb ? (
                    <span>
                      <b>Suburb:</b> {suburb} <br />
                    </span>
                  ) : null}
                  <b>Address:</b> {formatted} <br />
                  <div className="d-flex justify-content-between">
                    <div>
                      <b>Phone:</b> {phone} <br />
                    </div>
                    <div>
                      <b>Email:</b> {email} <br />
                    </div>
                  </div>
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
