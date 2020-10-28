import React from "react";
import { Card, Image } from "semantic-ui-react";

const InstaCard = ({ media }) => {
  return (
    <>
      <Card>
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
