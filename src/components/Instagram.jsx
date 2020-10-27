import React, { useEffect, useState } from "react";
import { Media } from "../modules/instagram";

const Instagram = () => {
  const [media, setMedia] = useState({});

  useEffect(() => {
    const getMediaIndex = async () => {
      setMedia(await Media.index());
    };
    getMediaIndex();
  }, []);

  return (
    <>
      {media.map((media) => {
        return (
          <>
            <img src={media.media_url} alt="instagram-pic" id="insta-img" />
            <p id="insta-caption">{media.caption}</p>
          </>
        );
      })}
    </>
  );
};

export default Instagram;
