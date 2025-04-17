import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./Gallerycards";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Gallery.css";

const Projects = () => {
  const campaigns2025 = [
    {
      title: "Education for All",
      description:
        "Providing school supplies and scholarships to underprivileged children.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Clean Water Mission",
      description:
        "Installing water wells in remote villages to ensure clean drinking water.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Health Clinics Expansion",
      description: "Building new healthcare centers in underserved areas.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Refugee Support Program",
      description:
        "Providing shelter, food, and legal support to displaced refugees.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Sustainable Agriculture",
      description:
        "Teaching farming techniques to improve food security and reduce poverty.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Disaster Relief Fund",
      description:
        "Rapid response to natural disasters, including flood, earthquake, and hurricane relief.",
      imgUrl: "/images/slide1.png",
    },
  ];

  const campaigns2024 = [
    {
      title: "Winter Relief Drive",
      description:
        "Supplying warm clothing and blankets to families in need during winter.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Medical Aid Initiative",
      description:
        "Free medical camps and medicine distribution in underserved areas.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Housing for Homeless",
      description:
        "Building safe and affordable housing for the homeless population.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Child Nutrition Program",
      description:
        "Providing nutritious meals to children in poverty-stricken areas.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Clean Energy Initiative",
      description: "Promoting sustainable energy sources in rural communities.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Vocational Training for Women",
      description:
        "Offering skill development programs to empower women in low-income areas.",
      imgUrl: "/images/slide1.png",
    },
  ];

  const campaigns2023 = [
    {
      title: "Food for Families",
      description:
        "Distributing food kits to families facing financial hardship.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Flood Relief Program",
      description:
        "Emergency assistance and supplies for flood-affected communities.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Youth Empowerment Program",
      description:
        "Providing mentorship and leadership training to young people.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Water Sanitation Campaign",
      description: "Building proper sanitation facilities in rural areas.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Elderly Support Network",
      description: "Providing support and care to elderly people in need.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Environmental Conservation",
      description:
        "Planting trees and raising awareness about environmental issues.",
      imgUrl: "/images/slide1.png",
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
                  }>
                  <h2>Our Donation Campaigns</h2>
                  <p>
                    Explore our ongoing and past initiatives focused on
                    humanitarian aid and development. Click on any project to
                    learn more about how your support makes an impact.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="2025">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="2025">2025</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2024">2024</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2023">2023</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="2025">
                        <Row>
                          {campaigns2025.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2024">
                        <Row>
                          {campaigns2024.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2023">
                        <Row>
                          {campaigns2023.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
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
    </section>
  );
};

export default Projects;
