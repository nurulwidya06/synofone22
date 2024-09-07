import { Container,Row, Col, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponent from "../components/customer/FooterComponent";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Api from "../routes/api";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [validation, setValidation] = useState({});
  const navigate = useNavigate();

  const handleLogin =  async (e) => {
      e.preventDefault();

      await Api.post("/login",{

        'email': email,
        'password': password
      }).then((response) => {
        console.log (response.data.token)
        Cookies.set("token",response.data.token);
        navigate('/dashboard/dashboard');
      }).catch((error)=>{
        setValidation(error.response.data);
      })
    }
      if (Cookies.get('token')){
    return navigate('dashboard/dashboard');
      }
  
  return (
    <>
      <Container className="mt-5">
        <Row>
            <Col lg={6}>
            <h2> Masuk</h2>
            <h6>Masuk Untuk melanjutkan Pembelian</h6>
            <br />
            <Form onSubmit={handleLogin}>
                <Form.Label className="mt-5">Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {validation.email && (
                <div className="alert alert-danger" role="alert">
                  {validation.email[0]}
                </div>                
                )}
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Masukkan Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                {validation.password && (
                <div className="alert alert-danger" role="alert">{validation.password[0]}</div>
                )}
                <Link to="/login" className="d-flex justify-content-end mt-3"> Lupa Password? </Link>

                <Button type="submit" variant="primary" className="mt-5"> Masuk </Button>
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
