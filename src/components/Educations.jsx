import { Container } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import EducationCard from "./EducationCard";
import { Data } from "../modules/data";

const Educations = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const getEducations = async () => {
      const fetchEducations = await Data.educations();
      setEducations(fetchEducations);
    };
    getEducations();
  }, []);

  return (
    <>
      <Container id="main-container">
        {educations.map((education) => {
          return (
            <div id={"education-" + education.id} key={education.id}>
              <EducationCard education={education} />
            </div>
          );
        })}
       
      </Container>
    </>
  );
};
export default Educations;
