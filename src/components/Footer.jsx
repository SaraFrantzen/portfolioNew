import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ui container">
        <p id="footer">
          <a
            id="footer-url"
            href="https://www.linkedin.com/in/sara-lundkvist-a0149655/"
            target="_blank"
          >
            <i class="linkedin large icon"></i>{" "}
          </a>{" "}
          | Sara Lundkvist 2020 |{" "}
          <a id="footer-url" href="https://github.com/Saralundkvist86" target="_blank">
            <i class="github large icon"></i>{" "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;