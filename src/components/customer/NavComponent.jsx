import { Container, Navbar, Nav, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping} from "@fortawesome/free-solid-svg-icons";

const NavComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt=" " />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex align-items-center">
              <form>
                <Form.Control type="text" placeholder="Cari Smartphone Apa" />
              </form>
              <Link to="/cart" className="me-3 text-light"><FontAwesomeIcon icon={faCartShopping}/></Link>
              <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
    <FontAwesomeIcon icon={faUser}/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
