import React, { Component } from 'react';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import Screen from './Screen';
import content from '../content';
import { Slide, SlideBackground, GeoShape } from './Slide';

import hero1 from '../images/hero-1.jpg';
import hero2 from '../images/hero-2.jpg';
import hero3 from '../images/hero-3.jpg';
import hero4 from '../images/hero-4.jpg';

const heroArray = [ hero1, hero2, hero3, hero4, hero1 ];

class LandingSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    // should this be a screen?
    let sliderStyles = {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'green'
    };

    return (
      <div className="slider" style={ sliderStyles }>

        <Slide
            classes="slide slide--current"
            name={ content.landing.profiles[this.props.count] }
            bgImage={ heroArray[this.props.count] }
            gradientArray={ content.gradients[this.props.count].colors }
            left={ 25 }
            />

      </div>
    )
  }
}

export default LandingSlider

// name={ content.landing.profiles[this.props.count + 1] }
// bgImage={ heroArray[this.props.count + 1] }
// gradientArray={ content.gradients[this.props.count + 1].colors }

// <Slide
//   classes="slide slide--next fade"
//   name="very fun 2"
//   bgImage={ hero2 }
//   />
// <div className="square"></div>
