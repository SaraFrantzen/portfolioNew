import React from "react";
import {  Segment } from "semantic-ui-react";
const Footer = () => {
  return (
   
      <Segment inverted id="footer">
      <div className="ui container">
        <p id="footer-txt">
          <a
            id="footer-url"
            href="https://www.linkedin.com/in/sara-lundkvist-a0149655/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="linkedin large icon"></i>{" "}
          </a>{" "}
          | Sara Lundkvist 2020 |{" "}
          <a id="footer-url" href="https://github.com/Saralundkvist86" target="_blank" rel="noopener noreferrer">
            <i class="github large icon"></i>{" "}
          </a>
        </p>
      </div>
      </Segment>

  );
};

export default Footer;