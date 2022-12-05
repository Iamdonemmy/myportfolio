import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Frame from "../assets/img/Frame.svg";
import Frame1 from "../assets/img/Frame1.svg";
import Frame2 from "../assets/img/Frame2.svg";
import Dashboard from "../assets/img/Dashboard.svg";
import Forgot from "../assets/img/Forgot.svg";
import Login from "../assets/img/Login.svg";
import Landing from "../assets/img/Landing.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Buddy Application",
      description: "Website Development",
      imgUrl: Frame,
    },
    {
      title: "Buddy Application",
      description: "Website Development",
      imgUrl: Dashboard,
    },
    {
      title: "Buddy Application",
      description: "Website Development",
      imgUrl: Frame2,
    },
    {
      title: "Zojatech Graduate Trainees Application",
      description: "Website Development",
      imgUrl: Landing,
    },
    {
      title: "Zojatech Graduate Trainees Application",
      description: "Website Development",
      imgUrl: Forgot,
    },
    {
      title: "Zojatech Graduate Trainees Application",
      description: "Website Development",
      imgUrl: Login,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Unity is strength. When there are teamwork and
                    collaboration, wonderful things can be achieved. Here are
                    part of the my projects successfully built.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Get in Touch</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          The only constant in the technology industry is change
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          The only constant in the technology industry is change
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
