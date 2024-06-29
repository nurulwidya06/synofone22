import { useState } from "react";
import { Container, Row, Col, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

const UnggulanComponent = ({kategori}) => {
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5 mb-3">
            <h5> Smartphone {kategori}  </h5>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp1.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">Xiaomi Redmi note 5</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp2.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">Oppo A79 5G</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp3.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">iPhone 15 Pro Max</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp4.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">Samsung S23 FE</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UnggulanComponent;
