import { Container, Row, Col, Card, Form } from "react-bootstrap";
import NavbarComponent from "../../components/customer/NavbarComponent";
import FooterComponent from "../../components/customer/FooterComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import UnggulanComponent from "../../components/customer/UnggulanComponent";

const DetailPage = () => {
  const [jumlah, setJumlah] = useState(1);

  const handleJumlahChange = (event) => {
    setJumlah(parseInt(event.target.value));
  };

  return (
    <>
      <NavbarComponent />
      <Container className="mt-5">
        <Row>
          <Col lg={5}>
            <Card>
              <img src="../src/assets/hp3.png" alt=" " />
            </Card>
          </Col>

          <Col lg={7}>
            <div className="deskripsi">
              <h4>iPhone 15 Pro Max</h4>
              <div className="spec">
                <h6>Spesifikasi</h6>
                <ul>
                  <li>Chip A17 Pro, Cpu 6 Core</li>
                  <li>Gpu 6 core</li>
                  <li>Layar 6,7 inch</li>
                  <li>Layar super retina XDR</li>
                </ul>
                <br />

                <div className="colors">
                  <h6>Pilihan Warna</h6>
                  <div className="color-option">
                    <button className="btn me-2">Red</button>
                    <button className="btn me-2">Grey</button>
                    <button className="btn me-2">Purple</button>
                  </div>
                </div>
                <br />
                <div className="jumlah">
                  <h6>Jumlah :</h6>
                  <Row>
                    <Col lg={2}>
                      <Form>
                        <Form.Control
                          type="number"
                          name="jumlah"
                          value={jumlah}
                          min={1}
                          onChange={handleJumlahChange}
                        />
                      </Form>
                    </Col>
                    <Col lg={10}>
                      <Link to="/login" className="btn btn-primary w-100">
                        Masukkan Keranjang
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <UnggulanComponent />
      <FooterComponent />
      
    </>
  );
};

export default DetailPage;
