import React from "react";

const Contact = () => {
  return (
    <div className="ui main container">
      <div class="column">
        <img
          id="contact-img"
          src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <h1 className="ui header" id="contact-header">
          Contact Me
        </h1>
      </div>
      <p id="contact-txt">
        Fill in this form to send me a message. I will get back to you as soon
        as I read it!
      </p>
    </div>
  );
};

export default Contact;
