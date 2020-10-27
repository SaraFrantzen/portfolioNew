import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu, Segment, Header } from "semantic-ui-react";
import i18n from "../i18n";

const PortfolioHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <Segment inverted>
        <Menu inverted>
          <Menu.Item as={Link} to="/" id="header">
            Sara Lundkvist
          </Menu.Item>
        </Menu>

        <Header.Subheader inverted>
          <Menu id="sub-menu">
            <Menu.Item as={Link} to="/cv" id="cv-tab">
              CV
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/educations"
              name="educations"
              id="educations-tab"
            >
              {t("educations")}
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/projects"
              name="projects"
              id="projects-tab"
            >
              {t("projects")}
            </Menu.Item>

            <Menu.Item as={Link} to="/instagram" name="contact" id="insta-tab">
              Instagram
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/contact"
              name="contact"
              id="contact-tab"
              position="right"
            >
              {t("contact")}
            </Menu.Item>

            <Menu.Item
              onClick={() => {
                i18n.changeLanguage("sv");
              }}
              position="right"
            >
              Svenska
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                i18n.changeLanguage("en");
              }}
              position="right"
            >
              English
            </Menu.Item>
          </Menu>
        </Header.Subheader>
      </Segment>
    </>
  );
};

export default PortfolioHeader;
