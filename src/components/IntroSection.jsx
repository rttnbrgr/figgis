import React, { Component } from 'react';
// import gradients from './gradients';
import { Gradient } from 'uigradients';
import Screen from './Screen';
import Headline from './Headline';
import content from '../content.js';
import classnames from 'classnames';



let gradientStyle = {
  opacity: '1',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '-1',
  transition: 'opacity .3s linear',
}

class IntroSection extends Component {

  // install proptypes
  // propTypes: {
  //   isHeadlineVisible: React.PropTypes.string.isRequired
  // }

  constructor(props) {
    super(props);
    this.state = {
      isHeadlineVisible: true,
      currentGradient: 'cherry',
      nextGradient: 'superman'
    }
  }

  // componentDidMount() {
  //   console.log('cdm');
  //   setTimeout( function(){
  //     this.hideHeadline();
  //   }, 2000)
  // };

  // let hideHeadline = function() {
  //   this.setState = {
  //     isHeadlineVisible: false
  //   }
  // }

  render () {

    let { isHeadlineVisible, currentGradient, nextGradient } = this.state;

    return (
      <Screen>
        <Gradient style={ gradientStyle } gradient="cherry"/>

        <span>&#x25B2;</span>
        {/* Alternate
        <Headline text="tasteclub" class/>
        */}

        {
          isHeadlineVisible && <Headline text="tasteclub" class/>
        }

        <div className="content">
          { /* Content Block */
            content.intro.copy.map((text, i) => (
              <div className="column" key={ i }>
                <p className="lato">{text}</p>
              </div>
            ))
          }
        </div>

        <span>&#x25BC;</span>
      </Screen>
    )
  }
}

export default IntroSection



// Slide Background
const GradientBackground = (props) => {

  let slideBackgroundStyles = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'transparent no-repeat top',
    backgroundImage: `linear-gradient(-45deg, ${ props.gradient[0] }, ${ props.gradient[1] }`,
    // switching
    visibility: 'inherit',
    opacity: '1',
    transition: '1s all linear',
  };

  let gradientBackgroundClasses = classnames({
    'slide__background gradient-bg': true,
    [`${ props.classes }`]: true,
  })

  return (
    <div className={ gradientBackgroundClasses } style={ slideBackgroundStyles }></div>
  )
}

GradientBackground.defaultProps = {
  gradient: ['yellow', 'magenta'],
  classes: ''
}
