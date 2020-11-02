import React, { useState } from "react";
import { Container, Image, Form, Button } from "semantic-ui-react";
import axios from "axios";

const Contact = () => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, message } = inputs;
    let response = axios.post("/mailMe", {
      email,
      name,
      text: message,
    });

    setInputs({
      email: "",
      name: "",
      message: "",
    });
    
  };

  return (
    <Container>
      <Image
        id="contact-img"
        src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <h1 id="contact-header">Contact Me</h1>

      <p id="contact-txt">
        Fill in this form to send me a message. I will get back to you as soon
        as I read it!
      </p>

      <Form onSubmit={handleSubmit} id="contact-form">
        <label>Your Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={inputs.email}
          required
        />

        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        />

        <label>Type your message here</label>
        <textarea
          type="text"
          name="message"
          onChange={handleChange}
          value={inputs.message}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
      <p>{responseMessage}</p>
    </Container>
  );
};

export default Contact;
