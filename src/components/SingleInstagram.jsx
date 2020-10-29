import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import  Media  from "../modules/instagram";

const SingleInstagram = () => {
  const [media, setMedia] = useState({});
  const { id } = useParams;

  useEffect(() => {
    
    const getSingleMedia = async () => {
      const fetchSingleMedia = await Media.show(id);
      setMedia(fetchSingleMedia);
    };
    getSingleMedia();
  }, [id]);

  return (
    <div>
     
      <Image
        src={media.media_url}
        alt="instagram-pic"
        id="insta-img"
        size="medium"
      />
       <p data-cy="insta-caption"> {media.caption}</p>
    </div>
  );
};

export default SingleInstagram;
