import { Container, Row, Col, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

const SmartphoneComponent = () => {
    return (
        <>
        <Container>
        <Row>
          <Col className="mt-5 mb-3">
            <h5> Smartphone Lainnya </h5>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp5.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">Xiaomi Redmi note 13 Pro+ 5G</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp6.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">Vivo V30 5G</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp7.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">Samsung Galaxy A05</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card>
              <Card.Img variant="top" src="../src/assets/hp8.png" />
              <Card.Body>
                <Link to="/detail" className="card-text">iPhone 15</Link>
                <h5>IDR 500.000</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default SmartphoneComponent