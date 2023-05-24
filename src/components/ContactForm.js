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
    const buttonText = "Send";

    const handleSubmit = (e)=>{
        e.preventDefault();

    }
    const onFormUpdate = (category, value) => {
        setForm({
            ...form,
            [category]: value
        })
    }
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} alt="Contact Us"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch.</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={form.firstName} placeholder="First Name" onChange={(e) => {
                                        onFormUpdate("firstName", e.target.value)
                                    }}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={form.lastName} placeholder="Last Name" onChange={(e) => {
                                        onFormUpdate("lastName", e.target.value)
                                    }}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={form.email} placeholder="Email" onChange={(e) => {
                                        onFormUpdate("email", e.target.value)
                                    }}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={form.phone} placeholder="Phone" onChange={(e) => {
                                        onFormUpdate("phone", e.target.value)
                                    }}></input>
                                </Col>
                                <Col>
                                    <textarea rows={6} value={form.message} placeholder="Message" onChange={(e) => {
                                        onFormUpdate("message", e.target.value)}}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}