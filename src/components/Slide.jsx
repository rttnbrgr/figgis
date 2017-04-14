import React, { Component } from 'react';
import content from '../content';
import hero1 from '../images/hero-1.jpg';
import hero2 from '../images/hero-2.jpg';
import hero3 from '../images/hero-3.jpg';
import hero4 from '../images/hero-4.jpg';
// import './Slide.css';

// Slide
const Slide = (props) => {

  let slideStyles = {
    position: 'absolute',
    top: '0%',
    // left: '0%',
    width: '50vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ccc',
    left: `${ props.left }%`,
    transition: '1s all linear',
    opacity: 1,

    left: '0',
    width: '100vw',

  }

  return (
    <div className="slide" style={ slideStyles }>

      <SlideBackground image={ props.bgImage }/>
      <GeoShape gradients={ props.gradientArray }/>

      {/* Props Debug */}
      <span style={{ position: 'relative' }}>
        { props.name }
        <br/>
        { props.bgImage }
      </span>

    </div>
  )
}

Slide.defaultProps = {
  name: 'Jerrod Carmichael',
  gradientArray: content.gradients[2].colors,
  bgImage: hero3,
  left: 0
}


// Slide Background
const SlideBackground = (props) => {

  let slideBackgroundStyles = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    background: 'transparent no-repeat top',
    backgroundColor: 'magenta',
    backgroundSize: 'cover',
    // switching
    visibility: 'inherit',
    opacity: '1',
    backgroundImage: `url(${ props.image })`,
    transition: '2s all linear',
  };

  return (
    <div className="slide__background" style={ slideBackgroundStyles }></div>
  )
}

SlideBackground.defaultProps = {
  image: hero1
}


// GeoShape
const GeoShape = (props) => {

  console.log(props.gradients[0]);

  let shapeStyles = {
    background: 'transparent center center no-repeat',
    backgroundImage: `linear-gradient(-45deg, ${ props.gradients[0] }, ${ props.gradients[1] }`,
    backgroundImage: `linear-gradient(-45deg, green, ${ props.gradients[1] }`,
    width: '500px',
    height: '500px',
    position: 'absolute',
    borderRadius: '50%',
    mixBlendMode: 'screen',
    transition: '3s all linear',
  }

  return (
    <div className="shape" style={ shapeStyles }></div>
  )
}

GeoShape.defaultProps = {
  gradients: ['yellow', 'magenta']
}



export { Slide, SlideBackground, GeoShape }
