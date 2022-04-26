import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/fog.png",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
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
        <h1 className="city mt-3 fw-bold">{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize description">
            {weatherData.description}
          </li>
        </ul>
        <div className="row mt-4">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature fw-bold">
              {weatherData.temperature}
            </span>
            <span className="unit fw-bold">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li className="humidity">Humidity: {weatherData.humidity}%</li>
              <li className="wind">Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
