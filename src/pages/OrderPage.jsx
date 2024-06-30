import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import NavComponent from "../components/NavComponent";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <>
      <NavComponent />
      <div id="order" className="mt-5"></div>
      <Container>
        <Row>
          <Col lg={6}>
            <Card>
              <Row>
                <Col>
                  <img
                    src="../src/assets/hp3.png"
                    alt=""
                    className="img-fluid rounded-start"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>iPhone 15 Pro Max</Card.Title>
                    <Form>
                      
                        <Form.Label>Jumlah :</Form.Label>
                        <Form.Control type="number" name="jumlah" min={1} />
                   
                      <Card.Text> Harga : </Card.Text>
                      <h6>IDR. 500.000</h6>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>

   
            </Card>
            <Row className="mt-3">
                <Col>
                  <Form>
                    <Form.Label> Alamat</Form.Label>
                    <Form.Control as="textarea" name="alamat" placeholder="Masukkan Alamat" rows={5}></Form.Control>
                  </Form>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form>
                    <Form.Label>Metode Pengiriman</Form.Label>
                    <Form.Select name="pengiriman">
                      <option>-- Pilihh Satu --</option>
                      <option value="reguler">Reguler | IDR 20.000</option>
                      <option value="ekspres">Ekspres | IDR 50.000</option>

                    </Form.Select>
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col>
                <Form>
                <Form.Label>Metode Pembayaran</Form.Label>
                    <Form.Select name="bayar">
                      <option>-- Pilihh Satu --</option>
                      <option value="bank">Transfer Bank</option>
                      <option value="gopay">Gopay</option>

                    </Form.Select>
                </Form>
                </Col>
              </Row>
          </Col>

            <Col lg={6}>
                <h6>Rincian Pembayaran</h6>
                <p>Harga Produk : <b>IDR 500.000</b></p>
                <p>Ongkos Kirim : <b>IDR 50.000</b></p>
                <hr />

                <p>Total belanja : <b>IDR 550.000</b></p>

                <Link to="/status" className="btn btn-primary w-100">Konfirmasi</Link>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderPage;
