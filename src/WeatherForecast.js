import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Weatherforecast-day">Sat</div>
          <WeatherIcon code="01d" size={32} />
          <div className="Weatherforecast-temperature">
            <span className="Weatherforecast-temperature-max">19°</span>
            <span className="Weatherforecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
