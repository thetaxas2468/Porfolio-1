import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/Octicons-mark-github.svg';

export const Footer = () => {




    return (
        <footer className="footer pt-5">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="img"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/karam-jbareen-b9206b218/">
                                <img src={navIcon1} alt="img"></img>
                            </a>
                            <a href="https://github.com/thetaxas2468">
                                <img src={navIcon4} alt="img"></img>
                            </a>
                            <a href="/">
                                <img src={navIcon3} alt="img"></img>
                            </a>
                            <a href="/">
                                <img src={navIcon2} alt="img"></img>
                            </a>
                        </div>
                        <p>CopyRight 2023. TAXAS</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}