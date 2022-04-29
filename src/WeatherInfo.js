import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city mt-3 fw-bold">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize description">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
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
