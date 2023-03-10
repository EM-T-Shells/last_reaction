import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <Container
      fluid
      className="bg-dark text-light text-center py-3"
      style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <a
          href="https://github.com/EM-T-Shells"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}>
          <FaGithub size={30} color="cyan" />
        </a>
        <a
          href="https://www.linkedin.com/in/emre-taskale-m-d-982093244/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}>
          <FaLinkedin size={30} color="green" />
        </a>
      </div>
      <p style={{ marginTop: "5px" }}>G.E. Taskale &copy; 2023</p>
    </Container>
  );
}

export default Footer;
