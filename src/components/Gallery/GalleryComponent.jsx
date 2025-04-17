import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./Gallerycards";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Gallery.css";

const Projects = () => {
  const campaigns2025 = [
    {
      title: "SOS Gaza",
      description: "Emergency humanitarian aid and relief for Gaza residents.",
      imgUrl: "/images/HeroSlider/slide1.png",
    },
    {
      title: "Zakat Al Maal",
      description:
        "Fulfill your annual Zakat obligation and help those in need.",
      imgUrl: "/images/HeroSlider/slide1.png",
    },
    {
      title: "Ramadan 2025",
      description:
        "Distribute iftar meals and essential aid during Ramadan 2025.",
      imgUrl: "/images/HeroSlider/slide1.png",
    },
    {
      title: "Rafah Emergency",
      description: "Support families affected by the crisis in Rafah.",
      imgUrl: "/images/HeroSlider/slide1.png",
    },
    {
      title: "Aid-al-Adha",
      description: "Share your Qurbani with families in need this Aid-al-Adha.",
      imgUrl: "/images/HeroSlider/slide1.png",
    },
    {
      title: "Orphan Sponsorship",
      description:
        "Sponsor an orphan and secure their future with your support.",
      imgUrl: "/images/HeroSlider/slide1.png",
    },
  ];

  const campaigns2024 = [
    {
      title: "Water For Gaza",
      description:
        "Provide access to clean drinking water for Gaza communities.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Zakat Al Maal",
      description: "Give your Zakat and uplift those struggling in poverty.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "SOS Gaza",
      description: "Lifesaving emergency response for people in Gaza.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Ramadan Donations",
      description: "Help families observe Ramadan with dignity and ease.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Orphan Sponsorship",
      description: "Provide care and education for orphaned children.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Rafah Emergency",
      description: "Deliver aid to civilians affected by the Rafah crisis.",
      imgUrl: "/images/slide1.png",
    },
  ];

  const campaigns2023 = [
    {
      title: "Ramadan Donations",
      description: "Join us in delivering Ramadan essentials to those in need.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Water For Gaza",
      description: "Ensure clean water access to families in Gaza.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Zakat Al Maal",
      description: "Distribute Zakat funds to support the most vulnerable.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Orphan Sponsorship",
      description: "Be the reason an orphan thrives and smiles again.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "SOS Gaza",
      description: "Deliver emergency aid to Gaza amidst urgent needs.",
      imgUrl: "/images/slide1.png",
    },
    {
      title: "Aid-al-Adha",
      description: "Support Eid sacrifice programs for needy families.",
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
