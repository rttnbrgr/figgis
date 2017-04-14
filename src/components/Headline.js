import React, { Component } from 'react';

const Headline = (props) => {

  let headlineStyle = {
    color: 'white',
    fontSize: '8em',
    textTransform: 'uppercase',
    borderBottom: '0.15em solid white',
    padding: '0 0.2em .2em .5em',
    display: 'inline-block',
    margin: '0 auto',
    letterSpacing: '0.4em',
    lineHeight: '1',
  };

  return (
    <h1 style={ headlineStyle } className={ props.classes }>{props.text}</h1>
  )

}

export default Headline
