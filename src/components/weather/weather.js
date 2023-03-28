import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import './weather.css';
const Weather = () => {
    return (
        <section>
            <div className="weather-box">
                <img src="" alt="" />
                <p className="temperature"></p>
                <p className="description"></p>
            </div>
            <div className="weather-datails">
                <div className="humidity">
                    <FontAwesomeIcon className="icon" icon={faWater} />
                    <div className="text">
                        <span></span>
                        <p>Huminity</p>
                    </div>
                </div>
                <div className="wind">
                    <FontAwesomeIcon className="icon" icon={faWind} />
                    <div className="text">
                        <span></span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Weather;