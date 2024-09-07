import { Container, Row, Col, Form, Button} from "react-bootstrap";
import FooterComponent from "../../components/customer/FooterComponent";


const DaftarPage = () => {
    return (
        <div className="daftar">
        <Container className="mt-5">
        <Row>
            <Col lg="6">
            <h2>Buat Akun </h2>
            <p> Buat Akun Untuk Mulai Berbelanja</p>

            <Form action="/cart">
                <Row>
                    <Col>
                    <Form.Label> Nama Lengkap </Form.Label>
                    <Form.Control type="text" name="nama-lengkap" placeholder="Masukkan Nama"/>
                </Col>
                    <Col>
                    <Form.Label> Nama Lengkap </Form.Label>
                    <Form.Control type="text" name="telepon" placeholder="Masukkan Nomor Telpon"/>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="email" name="email" placeholder="Masukkan Email"/>
                </Col>
                    <Col>
                    <Form.Label> Password </Form.Label>
                    <Form.Control type="password" name="password" placeholder="Masukkan password"/>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control as="textarea" name="alamat" placeholder="Masukkan Alamat" rows="5"> </Form.Control>
                    </Col>
                </Row>
                <Button type="submit" className="w-100 mt-5" > Buat Akun</Button>
            </Form>
            </Col>

            <Col lg="6">
            <img src="../src/assets/image 5.png" alt="" width="100%" />
            </Col>

        </Row>

        </Container>
        <FooterComponent/>
        </div>
    )
}

export default DaftarPage;