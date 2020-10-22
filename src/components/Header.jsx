import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container" id="nav-header">
        <Link id="header" className="header item" to="/">
          Sara Lundkvist
        </Link>

        <div className="right menu">
          <NavLink
            id="cv-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/cv"
          >
            CV
          </NavLink>

          <NavLink
            id="educations-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/educations"
          >
            Educations
          </NavLink>

          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink
            id="contact-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contact"
          >
            Contact
          </NavLink>

          <NavLink
            id="insta-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/instagram"
          >
            Instagram
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;