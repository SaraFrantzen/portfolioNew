import axios from "axios";
import ProjectCard from "./ProjectCard";
import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      await axios.get("./src/data/projects.json").then((response) => {
        setProjects(response.data);
      });
    };
    getProjects();
  }, []);

  return (
    <>
      {projects.map((project) => {
        return (
          <div id={"project-" + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      })}
      <div className="ui main container">
        <h1 id="projects-header" className="ui header">
          Web Development
        </h1>
        <div className="ui stackable four column grid">{projects}</div>
      </div>
    </>
  );
};

export default Projects;
