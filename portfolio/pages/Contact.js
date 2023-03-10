// Contact.js
import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="container bg-black" style={{ marginTop: "20px" }}>
        <Container style={{ padding: "20px" }}>
          <h1 className="text-center text-white">Contact me</h1>
          <div className="text-center text-white">
            <p style={{ marginTop: "20px" }}>
              <FaPhone /> 254-813-2833
            </p>
            <p>
              <FaEnvelope /> oneAiOpen.com
            </p>
          </div>
          
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
