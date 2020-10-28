import React, { useEffect, useState } from "react";
import { Container, Image, Card, Grid } from "semantic-ui-react";
import { Media } from "../modules/instagram";
import instagram from "../img/instagram.png";
import InstaCard from "./InstaCard";

const Instagram = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getMediaIndex = async () => {
      const fetchMedia = await Media.index();
      setMedia(fetchMedia);
    };
    getMediaIndex();
  }, []);

  return (
    <>
      <Grid>
        <Grid.Row id="insta-row">
          <Grid.Column>
            <Image src={instagram} size="medium" />
          </Grid.Column>
          <Grid.Column width={8}>
            <p id="insta-header">Latest post from Instagram </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            {media.map((media) => {
              return (
                <div
                  id={"media-" + media.id}
                  key={media.id}
                  className="media-container"
                >
                  <InstaCard media={media} />
                </div>
              );
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
export default Instagram;
