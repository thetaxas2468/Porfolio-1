import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../assets/img/contact-img.svg";


export const ContactForm = () => {

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [form, setForm] = useState(initialState);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} alt="Contact Us"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}