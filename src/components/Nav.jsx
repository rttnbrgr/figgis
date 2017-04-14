import React, { Component } from 'react';
import content from '../content';

class Nav extends Component {
  render() {

    let navStyle = {
      position: 'fixed',
      top: '0',
      right: '0',
      backgroundColor: 'black',
    }

    let navLinkStyle = {
      padding: '1em',
      color: 'white',
      display: 'inline-block',
    }

    console.log( 'this.props.scrollView' );
    console.log( this.props.scrollMethod );

    return (
      <nav style={ navStyle }>

        { content.nav.map((a, index) => (

          <a
            key={ index }
            onClick={ this.props.scrollMethod.bind(this, index) }
            href={`#${ a.title }`}
            className="nav-test"
            style={ navLinkStyle }>
            { a.title.toUpperCase() }
          </a>

        ))}

      </nav>
    )
  }

}

export default Nav
