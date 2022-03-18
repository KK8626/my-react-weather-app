import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1 className="city">New York</h1>
      <ul>
        <li className="date">Friday 11:00</li>
        <li className="description">Mist</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Mist"
          />
          <span className="temperature">10</span>
          <span className="unit">°C</span>
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
