import { Container } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import EducationCard from "./EducationCard";
import { Data } from '../modules/data';

const Educations = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const getEducations = async () => {
      setEducations(await Data.educations());
    };

    getEducations();
  }, []);

  return (
    <>
      <Container>
        {educations.map((education) => {
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
