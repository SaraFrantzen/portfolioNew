import axios from "axios";

const Data = {
  async educations() {
    let response = await axios.get("./src/data/educations.json");
    return response.data.educations;
  },

  async cv() {
    let response = await axios.get("./src/data/cv.json");
    return response.data;
  },

  async projects() {
    let response = await axios.get("./src/data/projects.json");
    return response.data;
  },
};

export { Data };
