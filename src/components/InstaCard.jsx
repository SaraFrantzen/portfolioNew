import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const InstaCard = ({ media }) => {

  return (
    <>
      <Card fluid
      id="insta-card" 
      as={Link}
      to={`/instagram/${media.id}`}
      data-cy={"media-" + media.id}
      >
        <Image
          src={media.media_url}
          alt="instagram-pic"
          id="insta-img"
          size="medium"
        />
      </Card>
    </>
  );
};

export default InstaCard;
