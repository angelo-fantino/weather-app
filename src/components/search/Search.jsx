import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Search({ textPlaceholder, searchResultData }) {
  const [searchCity, setSearchCity] = useState("");

  return (
    <>
      <Container fluid className="searchBox">
        <Row className="justify-content-center align-items-center">
          <Col sm={12} md={5} xl={3} xxl={3}>
            <h1>
              <strong>Weather APP</strong>
            </h1>
            <p>
              Around the world {"("} around the clock {")"}
            </p>
          </Col>

          <Col sm={10} md={6} xl={5} xxl={5}>
            <input
              className="searchStyle"
              value={searchCity}
              onChange={(event) => setSearchCity(event.target.value)}
              onKeyDown={(event) =>
                event.key === "Enter" && searchResultData(searchCity)
              }
              placeholder={textPlaceholder}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="searchBoxBottom"></Container>
    </>
  );
}

export default Search;
