import React from "react";

function About() {
  return (
    //need an element to send with jsx but dont want to use a div, you can substitute in a reactfragment as an element that doesnt appear in the DOM
    <React.Fragment>
      <h1>ABOUT</h1>
      <p>This is a TODOList app v1.0.0</p>
    </React.Fragment>
  );
}

export default About;
