import { Container, Row, Col, Form, Button } from "react-bootstrap"
import NavComponent from "../components/NavComponent"

const StatusPage = () => {
    return (
        <>
       <NavComponent/>
       <div id="status">
        <Container className="mt-5">
            <Row>
                <Col lg={6}>
                <h6>Pembayaran</h6>
                <p>Silahkan upload pembayaran dan upload bukti bayar sebelum 20 maret 2022 pukul 23.59.</p>
                <p>Bank BCA : No Rekening 12345678</p>

                <Form action="/finish">
                    <Form.Label><b>Upload Bukti Bayar</b></Form.Label>
                    <Form.Control type="file" name="bukti"/>
                    <Button type="submit" className="mt-3">upload Bukti Bayar</Button>
                </Form>

                </Col>
            </Row>

        </Container>
       </div>
        </>
    )
}

export default StatusPage