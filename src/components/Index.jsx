import React from "react";
import { Image } from "semantic-ui-react";
import sara3 from "../img/sara3.jpg";
import { useTranslation } from "react-i18next";

const Hello = () => {
  const { t } = useTranslation();
  return (
    <div class="ui three column grid" id="main-container">
      <div class="column">
        <Image src={sara3} id="profile-img" />
      </div>

      <div class="column" id="welcome-txt">
        <p id="introduction">{t("welcome")}</p>
        <p>{t("welcome1")}</p>
        <p>{t("welcome2")}</p>
        <p id="working-with"> {t("working-with")}</p>
        <p>
          Javascript ES6, HTML5 & CSS. React, React Native, Redux. Semantic UI
        </p>
        <p>Ruby on Rails, Node.js</p>
        <p>Cypress, Jest, RSpec, Detox</p>
        <p>API Integration</p>
        <p>Yarn, Babel, NPM. CI/CD. Webpack</p>
      </div>
      <div class="column">
        <h2 id="one-word"> {t("explained")}</h2>
        <h3 id="focus"> {t("focused")}</h3>
      </div>
    </div>
  );
};

export default Hello;
