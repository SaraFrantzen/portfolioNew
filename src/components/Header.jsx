import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import "../i18n";

const Header = () => {
  const { t } = useTranslation();

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
            name="educations"
          >
            {t["educations"]}
          </NavLink>

          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
            name="projects"
          >
            {t["projects"]}
          </NavLink>

          <NavLink
            id="contact-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contact"
            name="contact"
          >
            {t["contact"]}
          </NavLink>

          <NavLink
            id="insta-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/instagram"
          >
            Instagram
          </NavLink>

       {/*    <NavLink
            onClick={() => {
              i18n.changeLanguage("sv");
            }}
          >
            Svenska
          </NavLink>
          <NavLink
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            English
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
