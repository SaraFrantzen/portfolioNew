import axios from "axios";

const Media = {
  async index() {
    const apiKey = process.env.REACT_APP_OPEN_CAGE_API_KEY;
    let result = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${apiKey}`
    );
    return result.data.data;
  },
};

export { Media };
