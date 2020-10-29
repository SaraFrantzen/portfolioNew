import ProjectCard from "./ProjectCard";
import React, { useState, useEffect } from "react";
import { Data } from "../modules/data";
import { Container, Grid } from "semantic-ui-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const fetchProjects = await Data.projects();
      setProjects(fetchProjects);
    };
    getProjects();
  }, []);

  return (
    <>
      <div className="ui main container">
        <h1 id="projects-header" className="ui header">
          Web Development
        </h1>
      </div>
      <Container>
        <Grid>
          <Grid.Row columns={5}>
            {projects.map((project) => {
              return (
                <div
                  id={"project-" + project.id}
                  key={project.id}
                  className="project-container"
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
