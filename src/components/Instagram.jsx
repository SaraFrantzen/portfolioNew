import React, { useEffect, useState } from "react";
import { IG } from "../modules/instagram";

const Instagram = () => {
  const [media, setMedia] = useState({});

  useEffect(() => {
    const getMediaIndex = async () => {
      setMedia(await IG.index());
    };
    getMediaIndex();
  }, []);

  return (
    <div>
      {media.map((media) => {
        return (
          <div>
            <img src={media.media_url} alt="instagram-pic" />
            <p>{media.caption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Instagram;
