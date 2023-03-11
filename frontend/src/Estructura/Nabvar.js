import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { House, CardList, DoorClosed, Gear, Cart, Wallet, Person } from 'react-bootstrap-icons';

import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

function NavBar() {
    const navDropdownTitle = (<div style={{ display: "inline-block" }}><Person size={18} /> Usuario </div>);
    return (
        <>
            <Navbar collapseOnSelect bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/"><House size={18} /> Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/productos"><CardList size={18} /> Ver Productos</Nav.Link>
                        </Nav>

                        <Nav>
                            <NavDropdown title={navDropdownTitle} align="end">
                                <NavDropdown.Item><Gear size={18} /> Ajustes Perfil</NavDropdown.Item>
                                <NavDropdown.Item><Cart size={18} /> Carrito</NavDropdown.Item>
                                <NavDropdown.Item><Wallet size={18} /> Billetera</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><DoorClosed size={18} /> Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>

            <Footer></Footer>
        </>
    );
}

export default NavBar;