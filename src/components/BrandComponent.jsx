import { Container, Row, Col } from "react-bootstrap";

const BrandComponent = () => {
  return (
    <>
      <Container className="mt-5">
        {/* desktop view */}
        <div className="brand">
          <Row>
            <Col lg={2} className="d-none d-lg-block">
              <img src="../src/assets/ic-samsung.png" alt="" />
            </Col>
            <Col lg={2} className="d-none d-lg-block">
              <img src="../src/assets/ic-xiaomi.png" alt="" />
            </Col>
            <Col lg={2} className="d-none d-lg-block">
              <img src="../src/assets/ic-oppo.png" alt="" />
            </Col>
            <Col lg={2} className="d-none d-lg-block">
              <img src="../src/assets/ic-apple.png" alt="" />
            </Col>
            <Col lg={2} className="d-none d-lg-block">
              <img src="../src/assets/ic-realme.png" alt="" />
            </Col>
            <Col lg={2} className="d-none d-lg-block">
              <img src="../src/assets/ic-vivo.png" alt="" />
            </Col>
          </Row>

          <div className="mobile-brand d-block d-lg-none"></div>
          <Row>
            <Col lg={2} xs={4}>
              <img src="../src/assets/ic-samsung.png" alt="" />
            </Col>
            <Col lg={2} xs={4}>
              <img src="../src/assets/ic-xiaomi.png" alt="" />
            </Col>
            <Col lg={2} xs={4}>
              <img src="../src/assets/ic-oppo.png" alt="" />
            </Col>
            <Col lg={2} xs={4}>
              <img src="../src/assets/ic-apple.png" alt="" />
            </Col>
            <Col lg={2} xs={4}>
              <img src="../src/assets/ic-realme.png" alt="" />
            </Col>
            <Col lg={2} xs={4}>
              <img src="../src/assets/ic-vivo.png" alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default BrandComponent;
