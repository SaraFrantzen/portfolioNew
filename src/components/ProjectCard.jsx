import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card>
        <Image src={project.image} size="medium" />
        <Card.Content>
          <Card.Header>{project.name}</Card.Header>
          <Card.Description>{project.description}</Card.Description>

          <a href={project.git} target="_blank" rel="noopener noreferrer">
            <Button small animated circular id="webpage" tabindex="0">
              <Button.Content visible>
                <Icon name="big purple github icon" />
              </Button.Content>
              <Button.Content hidden>GitHub</Button.Content>
            </Button>
          </a>

          <a href={project.web} target="_blank" rel="noopener noreferrer">
            <Button animated circular id="webpage" tabindex="0">
              <Button.Content visible>
                <Icon name="big purple chrome icon" />
              </Button.Content>
              <Button.Content hidden>Web Page</Button.Content>
            </Button>
          </a>
        </Card.Content>
      </Card>
    </>
  );
};
export default ProjectCard;
