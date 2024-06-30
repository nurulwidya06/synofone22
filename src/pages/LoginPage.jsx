import { Container,Row, Col, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";


const LoginPage = () => {

  return (
    <>
      <Container className="mt-5">
        <Row>
            <Col lg={6}>
            <h2> Masuk</h2>
            <h6>Masuk Untuk melanjutkan Pembelian</h6>
            <br />
            <Form>
                <Form.Label className="mt-5">Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Masukkan Email"/>
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Masukkan Password" />
                <Link to="#" className="d-flex justify-content-end mt-3"> Lupa Password? </Link>
             
                <Button className="btn btn-ptimary mt-4"> Masuk </Button>
            </Form>
            <p className="mt-3">Sudah Punya Akun? <Link to="/login">Daftar</Link></p>
            </Col>
            <Col lg={6}>
        
                <img src="../src/assets/image4.png" alt="" width="100%"/>
        
            </Col>
        </Row>
      </Container>


      <FooterComponent/>
        </>

  );
};

export default LoginPage;
