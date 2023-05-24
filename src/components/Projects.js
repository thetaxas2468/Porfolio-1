import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import githubLog from "../assets/img/GitHub-Mark.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const projects = [
        {
            title: " beyond08-group3",
            description: "a web application that is supposed to help people group up, and organize a joint food purchase. Doing so, we remove the middlemen and reduce the price of the food products.",
            imgUrl: githubLog,
        },
        {
            title: "School-Social-Network-Website",
            description: "School website with registration needed as a student or teacher, it is a site that has the ability to communicate between the users via posts, notifications, relevant videos and class reminders",
            imgUrl: githubLog,
        },
        {
            title: "CampApp",
            description: "CampSite is a user-friendly platform that allows registered users to explore and discover new camping locations across the globe. Our platform provides a unique experience for users to browse throu…",
            imgUrl: githubLog,
        },
        {
            title: "AutomationChecker",
            description: "Desktop application for the teacher to use in order to check and grade the students homework.",
            imgUrl: githubLog,
        },
        {
            title: "ModernReact_NoRedux",
            description: "A repo that has folders and each folder is an application that is created using modern ReactJS without the use of redux.",
            imgUrl: githubLog,
        },
        {
            title: "ModernReact_WithRedux",
            description: "React sites using Redux and Redux toolkit",
            imgUrl: githubLog,
        },
        {
            title: "Other",
            description: "Other Is On My GitHub.",
            imgUrl: githubLog,
        }
    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Details
                        </h2>
                        <p>More Details About Me.</p>
                        <Tab.Container>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">About Me</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h2>October 2022 – February 2023 Software Engineer withRedHat Beyond (Internship)</h2>
                                    <h5>Worked in a team that contain five people including me embarked on a
                                        challenging journey to develop an open-source web application from
                                        scratch.<br></br><hr></hr>
                                        Worked with the guidance of four experienced Redhat mentors, the
                                        team went through all the stages of software development, including
                                        ideation, planning, development, testing, and presentation.<br></br><hr></hr>
                                        We utilized an impressive stack of technologies, such as the Django
                                        framework with SQLite3, Flake8, Pytest, HTML, CSS, JS, ERD, and DFD
                                        etc, among others, to build a high-quality and robust application.<br></br><hr></hr>
                                        Throughout the project, We used Github to manage and execute our
                                        work, utilizing pull requests and issues for collaboration, while Slack
                                        served as our primary communication tool.<br></br><hr></hr>
                                        The team's dedication, hard work, and technical proficiency resulted in
                                        a successful and impressive outcome, showcasing our expertise in
                                        software development.<br></br><hr></hr>
                                    </h5>
                                    <hr></hr>
                                    <h2>October 2022 - Present Homework checking at Tel-Hai College</h2>
                                    <p>Automata and formal languages, Advanced course in Linux software,
                                        Data structures, Numerical system and logical design, Algorithms
                                        and Python.<br></br>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h2>October 2019– March 2023 B.Sc in Computer Science @
                                        Tel-Hai College, Qiryat Shemona
                                    </h2>
                                    <p>Obtained the BSc degree with GPA 93% (Excellence in a
                                        final project by RedHat Company with GPA 100%).
                                    </p>
                                    <hr></hr>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <h5>Strong engineering professional with a
                                        Bachelor of Science - BSc focused in
                                        Computer Science with Honors and GPA of
                                        93%.<br></br><hr></hr>
                                        Decent knowledgeable in Full Stack
                                        technologies and always open to learn and
                                        embrace new and evolving software
                                        technologies and platforms, Independent
                                        learner who enjoys working in a fast-paced
                                        environment.<br></br><hr></hr>
                                        Strong coding capabilities: React, JS,
                                        NodeJS, C#, SQL, NoSQL, C, Java, Python
                                        etc.
                                    </h5>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img"></img>
        </section>

    )
}