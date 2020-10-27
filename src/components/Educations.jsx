import { Container } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import EducationCard from "./EducationCard";
import axios from "axios";

const Educations = () => {
  const [education, setEducations] = useState([]);

  useEffect(() => {
    const getEducations = async () => {
      await axios.get("./src/data/educations.json").then((response) => {
        setEducations(response.data.educations);
      });
    };
    getEducations();
  }, []);

  return (
    <>
      <Container>
        {education.map((education) => {
          return (
            <div id={"education-" + education.id} key={education.id}>
              <EducationCard education={education} />
            </div>
          );
        })}
        HELLO
      </Container>
    </>
  );
};
export default Educations;
