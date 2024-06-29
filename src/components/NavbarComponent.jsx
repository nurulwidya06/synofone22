// import component react bootstrap
import {Container, Nav, Navbar, Form,} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const NavbarComponent = ( ) => {
    return (
        <>
            <Navbar expand="lg" className='bg-primary'>
    <Container>
        <Navbar.Brand href="/"><img src={logo} alt=" " /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
    <form>
            <Form.Control
            type="text" placeholder="Cari Smartphone Apa"/>
    </form>     
        <Link to="/login" className='btn btn-warning me-2 text-light'>Login</Link>
        <Link to="/daftar" className='btn btn-outline-light me-2 text-light'> Daftar</Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>


        </>
    )

}

export default NavbarComponent