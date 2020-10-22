import axios from "axios";
import Resume from "./Resume";
import React, { Component } from "react";


class CV extends Component {
  state = {
    CV: [],
  };

  componentDidMount() {
    axios.get("../data/cv.json").then((response) => {
      this.setState({
        CV: response.data,
      });
    });
  }

  render() {
    const CV = this.state.CV;
    let resume;

    if (CV.length > 0) {
      resume = CV.map((cv) => {
        return (
          <div id={"cv-" + cv.id} key={cv.id}>
            <Resume cv={cv} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <img
          id="cv-img"
          src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        />
        <div class="column">
          <p id="cv-txt">
            I hold a mastersdegree in geochemistry from Stockholm University
            (2012). My eduacation is very research-oriented as I by then was
            aiming for a PhD. But in the end I realized that it just wasn't
            right for me.
          </p>
          <p id="cv-txt">
            I've always been a sporty person, during my university period I was
            ranked as 2'nd best female boxer in Sweden, and at the same time
            working extra as a boxers coach myself. Hence it became natural to
            continue with sports until I figure out what I really wanted to do
            in life.
          </p>
          <p id="cv-txt">
            Last couples of years I've been living abroad, and I have been
            thinking more and more about that software development would be a
            field that should suit me. So I moved back to Sweden and started the
            Craft Academy Bootcamp to become a full stack web developer. The
            feeling I have now is that I finally have found inner peace. This is me,
            I am a developer.
          </p>
          <p id="cv-header">Working Experience</p>
        </div>

        <div className="ui stackable four column grid" id="cv-grid">
          {resume}
        </div>
      </div>
    );
  }
}

export default CV;