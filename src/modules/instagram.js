import axios from "axios";


const Media = {
  
  async index() {
    const apiKey = process.env.REACT_APP_INSTAGRAM_API_KEY;
    let result = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${apiKey}`
      
    );
    
    return result.data.data;
  },

  async show(id) {
    const apiKey = process.env.REACT_APP_INSTAGRAM_API_KEY;

    
    let result = await axios.get(`
    https://graph.instagram.com/${id}?fields=id,media_url,caption&access_token=${apiKey}`);
    return result.data;
  },
};

export default Media ;
