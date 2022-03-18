import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city mt-3 fw-bold">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit fw-bold">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
