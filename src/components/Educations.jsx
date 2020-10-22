import axios from "axios";
import React, { Component } from "react";
import EducationCard from "./EducationCard";


class Educations extends Component {
  state = {
    educations: [],
  };

  componentDidMount() {
    axios.get("../data/educations.json").then((response) => {
      this.setState({
        educations: response.data,
      });
    });
  }
  render() {
    const educations = this.state.educations;
    let educationsList;

    if (educations.length > 0) {
      educationsList = educations.map((education) => {
        return (
          <div id={"education-" + education.id} key={education.id}>
            <EducationCard education={education} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable three column grid" id="education-grid">
          {educationsList}
        </div>
      </div>
    );
  }
}
export default Educations;