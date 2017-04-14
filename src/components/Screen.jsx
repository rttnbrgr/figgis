import React, { Component } from 'react';

class Screen extends Component {

  render() {

    let screenStyles = {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      // backgroundColor: '#ccc',      
    }

    return (
      <section style={ screenStyles }>
        {this.props.children}
      </section>
    )
  }
}

export default Screen
