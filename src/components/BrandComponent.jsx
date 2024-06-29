import { Container, Row, Col } from "react-bootstrap";

const BrandComponent = () => {
  return (
    <>
      <Container className="mt-5">
        <div className="brand">
          <Row>
            <Col lg={2}>
              <img src="../src/assets/ic-samsung.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="../src/assets/ic-xiaomi.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="../src/assets/ic-oppo.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="../src/assets/ic-apple.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="../src/assets/ic-realme.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="../src/assets/ic-vivo.png" alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default BrandComponent;
