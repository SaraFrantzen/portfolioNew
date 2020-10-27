import axios from "axios";
import Resume from "./Resume";
import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const CV = () => {
  const [cv, setCv] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getCv = async () => {
      await axios.get("./src/data/cv.json").then((response) => {
        setCv(response.data);
      });
    };
    getCv();
  }, []);

  return (
    <>
      <Container>
        {cv.map((cv) => {
          return (
            <div id={"cv-" + cv.id} key={cv.id}>
              <Resume cv={cv} />
            </div>
          );
        })}
        {cv.title}
        <div className="ui main container">
          <img
            id="cv-img"
            src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          />
          <div class="column">
            <p id="cv-txt">
            {t("cvTxt-1")}
             
            </p>
            <p id="cv-txt">
            {t("cvTxt-2")}
              
            </p>
            <p id="cv-txt">
            {t("cvTxt-3")}
             
            </p>
            <p id="cv-header">Working Experience</p>
          </div>

          <div className="ui stackable four column grid" id="cv-grid"></div>
        </div>
      </Container>
    </>
  );
};
export default CV;
