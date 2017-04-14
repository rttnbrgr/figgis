import React, { Component } from 'react';

// Bumper
const Bumper = (props) => (
  <div className="App-header">
    <h1 className="headline">{ props.children }</h1>
  </div>
)

/* Sample
------------
<Bumper>only cuz i wanna aovid a warning</Bumper>
*/
