import React, { useState } from "react";
import { Api } from "./Api";
import {
  Search,
  CurrentWeather,
  ForecastWeather,
  Footer,
} from "./components/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearchLocation = async (dataSearch) => {
    const weatherDataFetch = fetch(
      `${Api.url}/weather?q=${dataSearch}&units=metric&appid=${Api.key}`
    );
    const forecastDataFetch = fetch(
      `${Api.url}/forecast?q=${dataSearch}&units=metric&appid=${Api.key}`
    );

    await weatherDataFetch
      .then((res) => {
        if (!res.ok) {
          throw new Error("City name: typed wrong or blank input.");
        }
        return res.json();
      })
      .then((res) => {
        setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });

    await forecastDataFetch
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Weather forecast not found. Waiting for the correct city name."
          );
        }
        return res.json();
      })
      .then((res) => {
        setForecastData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Search
        searchResultData={handleSearchLocation}
        textPlaceholder="Search for a place..."
      />
      <div className="contentApp">
          {weatherData && <CurrentWeather resultData={weatherData} />}
          {forecastData && <ForecastWeather resultData={forecastData} />}
          <div className="lineBox">
              <div className="line"></div>
              <div className="lineText">
                <a
                  className="link"
                  href="https://openweathermap.org/"
                  target="_blank"
                  rel="noopener noreferrer"                  
                >
                  openweathermap.org
                </a>
              </div>
            </div>        
      </div>
      <Footer />
    </div>
  );
}

export default App;
