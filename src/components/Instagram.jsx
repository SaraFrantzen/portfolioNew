import React, { useEffect, useState } from "react";
import { Container, Image, Grid } from "semantic-ui-react";
import  Media  from "../modules/instagram";
import instagram from "../img/instagram.png";
import InstaCard from "./InstaCard";
import { useTranslation } from "react-i18next";

const Instagram = () => {
  const { t } = useTranslation();
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
    <Container>
      <Grid>
        <Grid.Row id="insta-row">
          <Grid.Column width={3}>
            <Image src={instagram} size="small" />
          </Grid.Column>
          <Grid.Column width={9}>
            <p id="insta-header">{t("instagram")}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
   </Container>
        <Grid textAlign="center" padded="horizontally">
          <Grid.Row columns={5}>
            
            {media.map((media) => {
              
              return (
                <div
                  key={media.id}
                  className="media-container"
                >
                  <InstaCard media={media} />
                </div>
              );
            })}
          </Grid.Row>
        </Grid>
     
    </>
  );
};
export default Instagram;
