import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
              autoFocus="on"
            />
          </form>
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
      <h1 className="city mt-3 fw-bold">New York</h1>
      <ul>
        <li className="date">Friday 11:00</li>
        <li className="description">Mist</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
            alt="Mist"
          />
          <span className="temperature fw-bold">10</span>
          <span className="unit fw-bold">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li className="humidity">Humidity: 92%</li>
            <li className="wind">Wind: 3 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
