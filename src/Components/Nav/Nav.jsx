import './Nav.css'
//IMAGENS
import logo from '../../assets/logo.png'
//REACT
import {NavLink} from "react-router-dom";
//BOOTSTRAP
import {Button, Container, Nav, Navbar} from "react-bootstrap";
function Navigation() {

    return (
        <>
            <Navbar expand="md" className="fixed-top navFundo ">
                <Container>

                    <Navbar.Brand as={NavLink} to="/">
                        <img src={logo} alt="Logo" style={{ height: "90px", width: "150px" }}/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn_toggle"/>

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mx-auto align-items-center mb-4 mb-md-0">

                            <Nav.Link as={NavLink} to="/" className="px-4 nav_link">
                                Inicio
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/canais-denuncia" className="px-4 nav_link">
                                Canais de Denúncia
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/nao-tenha-medo" className="px-4 nav_link">
                                Não Tenha Medo
                            </Nav.Link>

                        </Nav>

                        <a href={"tel:157"} target="_blank" className="btnDenuncia  ">
                            Denuncie
                        </a>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
