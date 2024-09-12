import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/alifshop.png";  // AlifShop rasm URL'si
import projImg2 from "../assets/img/last-exam.png";  // Last Exam rasm URL'si
import projImg3 from "../assets/img/8-month-8-lesson.png";  // 8-Month 8-Lesson rasm URL'si
import projImg4 from "../assets/img/exam5.png";  // Exam5 rasm URL'si
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AlifShop",
      description: "E-commerce platform for AlifShop",
      imgUrl: projImg1,
      url: "https://github.com/MuhammadAminShomurodov/AlifShop"
    },
    {
      title: "Last Exam",
      description: "A project for managing exam schedules and results",
      imgUrl: projImg2,
      url: "https://github.com/MuhammadAminShomurodov/Last-exam"
    },
    {
      title: "8-Month 8-Lesson",
      description: "A learning management system for a course",
      imgUrl: projImg3,
      url: "https://github.com/MuhammadAminShomurodov/8-month-8-lesson"
    },
    {
      title: "Exam5",
      description: "An exam management system",
      imgUrl: projImg4,
      url: "https://github.com/MuhammadAminShomurodov/exam5.git"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                url={project.url}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Currently working on new real projects. These sections will be updated soon! ;)</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Currently working on new real projects. These sections will be updated soon! ;)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background design" />
    </section>
  )
}
