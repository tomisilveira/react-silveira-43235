import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget'
import NavDropdown from 'react-bootstrap/NavDropdown';




const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#"><img src="../public/img/FullCleanLogo.svg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Categoria" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Liquidos</NavDropdown.Item>
              <NavDropdown.Item href="#">Papeleria</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget />
    </Navbar>
  );
}


export default NavBar