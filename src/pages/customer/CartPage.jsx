import { Container, Row, Col, Card, Button, Form} from "react-bootstrap";
import NavComponent from "../../components/customer/NavComponent";
import FooterComponent from "../../components/customer/FooterComponent";


const CartPage = () => {
    return (
        <>
        <NavComponent/>
            <Container className="mt-5"> 
            <Row>
                <Col lg={6}>
                <Card className="mb-3">
                    <Row>
                        <Col md="4">
                        <img src="../src/assets/hp3.png" className="img-fluid rounded-start" alt="..." />
                        </Col>
                        <Col md="6">
                        <Card.Body>
                            <Card.Title>iPhone 15 Pro Max</Card.Title>
                            <Form>
                                <Form.Label> Jumlah  </Form.Label>
                                <Form.Control type="number" name="jumlah" min="1" ></Form.Control>
                            </Form>
                            <Card.Text>Harga :</Card.Text>
                            <h5>IDR 500.000</h5>
                        </Card.Body>
                        </Col>
                        <Col md="2">
                        <Button variant="danger" className="mt-5">Delete</Button>
                        </Col>

                        
                    </Row>
                </Card>

                </Col>

                <Col lg="6">
                <h4>Ringkasan Belanja</h4>
                <p><b>Total item:</b> 2 </p>
                <p><b>Total belanja :</b> IDR 500.000</p>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                <Card className="mb-3">
                    <Row>
                        <Col md="4">
                        <img src="../src/assets/hp6.png" className="img-fluid rounded-start" alt="..." />
                        </Col>
                        <Col md="6">
                        <Card.Body>
                            <Card.Title>Vivo V30 5G</Card.Title>
                            <Form>
                                <Form.Label> Jumlah  </Form.Label>
                                <Form.Control type="number" name="jumlah" min="1" ></Form.Control>
                            </Form>
                            <Card.Text>Harga :</Card.Text>
                            <h5>IDR 500.000</h5>
                            </Card.Body>
                        </Col>
                        <Col md="2">
                        <Button variant="danger" className="mt-5">Delete</Button>
                        </Col>
                    </Row>
                </Card>

                </Col>
            </Row>
            </Container>
            <FooterComponent/>
        </>
    );
}

export default CartPage;