import React from "react";

const Resume = ({ cv }) => {
  return (
    <>
        <div class="ui main container">
        <div class="column">
          <div class="ui small left floated image" id="education-img">
            <a href={cv.web} target="_blank">
              {" "}
              <img src={cv.image}></img>
            </a>
          </div>
        </div>
        <div class="column">
          <h2>{cv.company}</h2>
        </div>

        <div class="column" id="education-title">
        {cv.title}
        </div>
        <div class="column" id="education-description">
        {cv.description}
        </div>
      </div>

    </>
  );
};
export default Resume;