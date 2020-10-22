import React from "react";

const Resume = ({ cv }) => {
  return (
    <>
      <div class="ui cards" id="cv-card">
        <div class="card">
          <div class="content">
            <div class="ui top attached button" id="cv-button">
            
              <a href={cv.url} target="_blank">
                <h3 class="ui header">{cv.company}</h3>
              </a>
            </div>

            <div class="title">{cv.title}</div>

            <div class="description">{cv.description}</div>
            <div class="time" id="cv-time">
              {cv.time}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;