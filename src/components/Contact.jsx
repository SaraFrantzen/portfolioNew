import React, { useState } from "react";
import {
  Container,
  Image,
  Form,
  Button,
  Message,
  Grid,
} from "semantic-ui-react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, message } = inputs;
    let response = await axios.post("/mailMe", {
      email,
      name,
      text: message,
    });
    setResponseMessage(response.data.status);
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
      {responseMessage && <Message color="purple">{responseMessage}</Message>}

      <Form onSubmit={handleSubmit} id="contact-form">
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={inputs.email}
                required
              />
            </Grid.Column>

            <Grid.Column width={5}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={inputs.name}
                required
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <label>Type your message here</label>
              <textarea
                type="text"
                name="message"
                onChange={handleChange}
                value={inputs.message}
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Button type="submit" id="contact-button" floated="right">
                Send
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default Contact;
