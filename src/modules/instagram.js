import axios from "axios";

const IG = {
  async index() {
    const apiKey = process.env.REACT_APP_OPEN_CAGE_API_KEY;
    let result = await axios.get(
      `https://graph.instagram.com/17867900231025012?fields=id,media_type,media_url,caption,username,timestamp&access_token=${apiKey}`
    );
    return result;
  },
};

export { IG };
