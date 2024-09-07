import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <>
    <Container fluid className='vh-100 d-flex justify-content-center align-items-center' >
        <Row className='w-100'>
            <Col xs={8} md={4} lg={3} className='mx-auto'> 
            <Form className='p-4 shadow-sm border rounded'>
                <h1 className='text-center mb-4'>Login</h1>
                <Form.Group className='mb-3'>
                <Form.Control type='email' placeholder='Email'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                <Form.Control type='password' placeholder='Password'/>
                </Form.Group>
                <Button className='w-100 mb-3' size='sm'>
                    Login
                </Button >
                <p>Belum Punya Akun? <Link to="/admin/register" className='text-decoration-none'> Register </Link></p>
            </Form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Login