import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const weekDayName = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function ForecastWeather({ resultData }) {
  const dayInAWeek = new Date().getDay();
  const forecastWeekDay = weekDayName
    .slice(dayInAWeek, weekDayName.length)
    .concat(weekDayName.slice(0, dayInAWeek));

  console.log(forecastWeekDay);
  console.log(resultData);

  return (
    <Container className="weatherBoxStyleBottom" >
      <Row>
      {resultData.list.splice(0, 6).map((item, index) => (
        <Col key={index} xs={4} sm={4} md={2} className="forecastContainer">
          <div className="infoLayout">
            <span className="infoLayout2">
              <strong>{forecastWeekDay[index]}</strong>
            </span>

            <span className="infoLayout2">
              <strong className="tempMaxForecast">
                {Math.round(item.main.temp_min)}°
              </strong>{" "}
              <strong className="tempMinForecast">
                {Math.round(item.main.temp_max)}°
              </strong>
            </span>

            <span className="infoLayout2">
              <img
                alt="Weather Icon"
                className="centerImg"
                src={`icons/${item.weather[0].icon}.png`}
              />
            </span>

            <span className="infoLayout2">{item.weather[0].description}</span>
          </div>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default ForecastWeather;
