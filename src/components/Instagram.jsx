import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { Media } from "../modules/instagram";

const Instagram = () => {
  const [media, setMedia] = useState({});

  useEffect(() => {
    const getMediaIndex = async () => {
     const fetchMedia = await Media.index();
     setMedia(fetchMedia)
    };
    getMediaIndex();
  }, []);






  return (
    <>
    <Container>
      {media.map((media) => {
        return (
          <>
            <img src={media.media_url} alt="instagram-pic" id="insta-img" />
            <p id="insta-caption">{media.caption}</p>
          </>
        );
      })}
      </Container>
    </>
  );
};

export default Instagram;
