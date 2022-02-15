import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({setCategoryId}) => {
  
  const navigate = useNavigate();
  function handlerCategory(category) {
    if (category === "perros"){
      setCategoryId(1)
    }
    else if (category === "gatos") {
      setCategoryId(2)
    }
    navigate.push(`/${category}`);
    
  }
  return (
    <div className="navbarContainer">
      <Navbar bg="light" expand="lg" className="navegacion">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home" className="nav-link">
            GARRITAS PETSHOP
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link" >
                INICIO
              </Nav.Link>
              <Nav.Link as={Link} to="/perros" className="nav-link" onClick={() => handlerCategory("perros")}>
                PERROS
              </Nav.Link>
              <Nav.Link as={Link} to="/gatos" className="nav-link" onClick={() => handlerCategory("gatos")}>
                GATOS
              </Nav.Link>
              <Nav.Link as={Link} to="/servicios" href="#servicios" className="nav-link">
                SERVICIOS
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" href="#link" className="nav-link">
                CONTACTO
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartWidget />
    </div>
  );
};

export default NavBar;
