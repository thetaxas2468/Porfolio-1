import { Col } from "react-bootstrap"



export const ProjectCard = ({ title, description, imgUrl }) => {




    return (
        <Col sm={6} md={4} lg={3}>
            <div className="proj-imgbx">
                <img src={imgUrl} className="customImage" alt="img"></img>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}