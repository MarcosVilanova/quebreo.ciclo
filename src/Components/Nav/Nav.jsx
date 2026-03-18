import './Nav.css'
// IMAGENS
import logo from '../../assets/Icon&logo/logo.png'
// REACT
import { NavLink } from "react-router-dom";
// BOOTSTRAP
import {Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
    return (
        <>
            <section>
                <div className="d-flex justify-content-center Nav01 gap-4">
                    {/* Link 180 */}
                    <a href="tel:180" aria-label="Central de Atendimento à Mulher 180">
                        <span className="d-inline d-md-none">Ligue 180</span> {/* texto mobile */}
                        <span className="d-none d-md-inline">Central de Atendimento à Mulher 180</span> {/* texto desktop */}
                    </a>

                    {/* Link 197 */}
                    <a href="tel:197" aria-label="Disque Denuncia 197">
                        <span className="d-inline d-md-none">Ligue 197</span>
                        <span className="d-none d-md-inline">Disque Denúncia 197</span>
                    </a>

                    <a href="#" aria-label="Atendimento gratuito vinte e quatro horas">
                        <span className="d-inline d-md-none">Atend. 24h</span>
                        <span className="d-none d-md-inline">Atendimento 24h Gratuito</span>
                    </a>
                </div>
            </section>


            <Navbar expand="lg" className="navigation">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: "4.5rem", width: "auto" }}
                            className="ms-4 ms-md-0"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation"  className="btn_toggle" />
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
                            <Nav.Link as={NavLink} to="/sobre" className="px-4 nav_link">
                                Sobre
                            </Nav.Link>
                        </Nav>
                        <a href={"tel:180"} target="_blank" className="btnDenuncia">
                            Denuncie
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;