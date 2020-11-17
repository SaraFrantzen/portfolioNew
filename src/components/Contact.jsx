import React from "react";
import { Container, Image } from "semantic-ui-react";

const Contact = () => {
  return (
    <Container>
      <Image
        id="contact-img"
        src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />

      <p id="contact-txt">Saralundkvist@gmail.com | +46793192077</p>
    </Container>
  );
};

export default Contact;
