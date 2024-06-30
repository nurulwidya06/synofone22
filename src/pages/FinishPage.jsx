import { Container, Row, Col } from "react-bootstrap"
import NavComponent from "../components/NavComponent"
import { Link } from "react-router-dom"

const FinishPage = () => {
    return (
        <>
        <NavComponent/>
        <div id="finish">
       <Container>
        <Row>
            <Col className="mt-3 text-center">
            <h1>Selamat! Pesanan Berhasil Dibuat</h1>
            <img src="../src/assets/img-sukses.png" alt="" width="50%" className="mt-2" />
            <p>Admin kami akan menghubungi anda secara berkala untuk pesanan dan nomor resi pengiriman melalui Whatapps</p>
            <Link to="/" className="btn btn-primary">Kembali Ke Beranda</Link>

            </Col>

        </Row>
       </Container>
       </div>
        </>
    )
}

export default FinishPage