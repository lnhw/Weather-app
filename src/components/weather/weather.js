import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import './weather.css';
import NotFound from "../NotFound/NotFound";


const Weather = ({ searchWeatherData }) => {
  if (!searchWeatherData || !searchWeatherData.weather || !searchWeatherData.weather[0]) {
    return <NotFound/>;
  }
  
  return (
    <section className="show-weather">
      <div className="weather-box">
        <img src={`http://openweathermap.org/img/wn/${searchWeatherData.weather[0].icon}.png`} alt="" />
        <p className="temperature">{Math.round(searchWeatherData.main.temp)}&#176;C</p>
        <p className="description">{searchWeatherData.weather[0].description}</p>
      </div>
      <div className="weather-datails">
        <div className="humidity">
          <FontAwesomeIcon className="icon" icon={faWater} />
          <div className="text">
            <span>{searchWeatherData.main.humidity}%</span>
            <p>Huminity</p>
          </div>
        </div>
        <div className="wind">
          <FontAwesomeIcon className="icon" icon={faWind} />
          <div className="text">
            <span>{searchWeatherData.wind.speed}km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
