// Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const expression = /\S+@\S+\.\S+/;
    const isValid = expression.test(String(email).toLowerCase());
    if (!isValid) {
      alert("Please enter a valid email address");
      setEmail("");
    } else {
      alert("Success!");
    }
  };

  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Contact;
