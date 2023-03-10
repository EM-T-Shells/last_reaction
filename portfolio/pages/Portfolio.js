import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <div>
          <h3>Project 1</h3>
          <a href="http://project1.com">Link</a>
          <a href="http://project1github.com">GitHub Repo</a>
        </div>
        <div>
          <h3>Project 2</h3>
          <a href="http://project2.com">Link</a>
          <a href="http://project2github.com">GitHub Repo</a>
        </div>
        <div>
          <h3>Project 3</h3>
          <a href="http://project3.com">Link</a>
          <a href="http://project3github.com">GitHub Repo</a>
        </div>
        <div>
          <h3>Project 4</h3>
          <a href="http://project4.com">Link</a>
          <a href="http://project4github.com">GitHub Repo</a>
        </div>
        <div>
          <h3>Project 5</h3>
          <a href="http://project5.com">Link</a>
          <a href="http://project5github.com">GitHub Repo</a>
        </div>
        <div>
          <h3>Project 6</h3>
          <a href="http://project6.com">Link</a>
          <a href="http://project6github.com">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
import { Container, Row, Col } from "react-bootstrap";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Portfolio()
{
  const projects = [
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
