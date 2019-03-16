import React, { Component } from 'react';
import axios from 'axios';

class ContainerData extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="App">
        <p>{this.props.page}</p>
      </div>
    );
  }
}

export default ContainerData;