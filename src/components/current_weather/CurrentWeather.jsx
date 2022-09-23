import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CurrentWeather({ resultData }) {
  const day = new Date();
  const dayOfWeek = weekDay[day.getDay()];

  return (
    <Container >
      <Row className="weatherBoxStyleTop">
      <Col md={2} className="currentContainerLeft">
        <img
          alt="Weather Icon"
          src={`icons/${resultData.weather[0].icon}.png`}
        />
      </Col>

      <Col md={3}>
        <div className="infoLayout">
          <span className="infoLayout2">
            <span className="tempNumber">
              {Math.round(resultData.main.temp)}
            </span>
            <span className="tempCelsius"> °C</span>
          </span>
        </div>
      </Col>

      <Col md={3} className="currentContainerLeft">
        <div className="infoLayout">
          <span className="infoLayout2">
            <strong className="currentWeatherDescription">
              {resultData.weather[0].description}
            </strong>
          </span>
          <span className="infoLayout2">
            Humidity: {resultData.main.humidity}%
          </span>
          <span className="infoLayout2">
            Wind: {Math.round(resultData.wind.speed)} m/s
          </span>
        </div>
      </Col>

      <Col md={4} className="currentContainerRight">
        <div className="infoLayout">
          <span className="infoLayout2">
            <strong>
              <h2>
                {resultData.name} - {resultData.sys.country}{" "}
              </h2>
            </strong>
          </span>

          <span className="infoLayout2">{dayOfWeek}</span>
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default CurrentWeather;
