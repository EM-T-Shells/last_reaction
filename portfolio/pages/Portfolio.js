import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import { Container, Row, Col } from "react-bootstrap";
import Portfolio from "../components/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Portfolio()
{
  const Projects = [
    {
      name: "TalesFromTheAlgorithm",
      githubLink:"https://github.com/EM-T-Shells/TalesfromtheAlgorithm",
      deployLink: "/https://github.com/EM-T-Shells/TalesfromtheAlgorithm/",
    },
    {
      name: "Plant Parenthood",
      image: busybeeImg,
      githubLink: "https://github.com/EM-T-Shells/Bikini-Bottom_Farmers-Markethttps://github.com/",
      deployLink: "heroku"
    }
  ];


  return (
    <div id="portfolio" className="bg-black">
      <Header />
      <Container style={{ padding: "20px 0" }}>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-5 text-white">
            <h1>My Portfolio</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="my-3">
              <Projects
                name={project.name}
                githubLink={project.githubLink}
                deployLink={project.deployLink}
                styles={styles}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Portfolio;