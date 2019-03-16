import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <p>MACROVUE</p>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default Header;
