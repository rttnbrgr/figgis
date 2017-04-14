import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen';
// import gradients from './gradients';
import { Gradient } from 'uigradients';
import content from './content';
import LandingSlider from './components/LandingSlider';
import IntroSection from './components/IntroSection';
import Nav from './components/Nav';

let testColors = [ 'red', 'green', 'blue', 'yellow' ];
let profilesArray = content.landing.profiles;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      date: new Date(),
      offset: {
        vertical: 0
      }
    }

    this.increaseCounter = this.increaseCounter.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.tick();
        this.increaseCounter();
        // console.log(this);
      }, 7000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
    console.log('tick');
  }



  test() {
    console.log('test', this);
  }

  render() {

    let bgImage = `hero${this.state.counter}`;

    let sliderSpan = {
      position: 'absolute',
      padding: '1em',
      top: '1em',
      left: '1em',
      backgroundSize: 'cover',
      background: 'transparent no-repeat top',
      // backgroundImage: `url("${ bgImage }")`,
      backgroundColor: `${ testColors[this.state.counter] }`
    }

    let viewStyle = {
      height: '100%',
      position: 'relative',
      // touch-action: 'none',
      transform: `translate3d(0px, ${ this.state.offset.vertical }vh, 0px)`,
      transition: 'all 700ms ease',
    }

    let navStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: 'black',
    }

    let navLinkStyle = {
      padding: '1em',
      color: 'white',
      display: 'inline-block',
    }

    return (
      <div className="App">

        <div className="view view--scroll" style={ viewStyle }>

          <LandingSlider count={this.state.counter} />
          <IntroSection />
          <Screen>hi</Screen>

        </div>

        <nav style={ navStyle }>

          { content.nav.map((a, index) => (

            <a
              key={ index }
              onClick={ this.scrollView.bind(this, index) }
              href={`#${ a.title }`}
              className="nav-test"
              style={ navLinkStyle }>
              { a.title.toUpperCase() }
            </a>

          ))}

        </nav>

        <Nav scrollMethod={ this.scrollView.bind(this) }/>

      </div>
    )
  }

  // Test Method
  test() { console.log('test method'); }

  // Handle the scrolling
  scrollView(index) {

    console.log('scrollview');
    console.log('index =>', index);

    let scrollOffset = index * (-100);

    this.setState({
      offset: {
        vertical: scrollOffset
      }
    });
  }

  // Increase the Count
  increaseCounter() {

    this.setState((prevState, props) => {

      let newCount = profilesArray.length - 1 > prevState.counter ? prevState.counter + 1 : 0;
      return {
        counter: newCount
      }

    });
  }



}

export default App;


/*

const Bumper = (props) => (
  <div className="App-header">
    <h1 className="headline">{ props.children }</h1>
  </div>
)

<Bumper>only cuz i wanna aovid a warning</Bumper>

<Screen>
  <span style={sliderSpan}>
    {content.landing.profiles[this.state.counter]}
  </span>
  <a onClick={ this.increaseCounter }> test </a>
</Screen>

*/
