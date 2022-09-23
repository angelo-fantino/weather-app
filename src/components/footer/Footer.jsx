import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="footer-style">
        <Row className="justify-content-center">
          <Col>
            <div className="footerLineStyle"></div>
            <br />
            <p>
              This responsive weather web app has been designed and developed by
              Angelo Fantino
            </p>

            <p>
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/angelo-fantino"
              >
                &#9827; 2022 - Angelo Fantino
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
