import React, { Component } from 'react';
import Header from './Header';
import Filters from './Filters';
import ContainerData from './ContainerData';
import '../styles/style.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'ALL',
      type: 'ALL',
      entries: 5,
      page: 1,
    };
  }
  
  _handleCountryCode = (countryCode) => {
    this.setState({ countryCode });
  };

  _handleType = (type) => {
    this.setState({ type });
  };

  _handleEntries = (entries) => {
    this.setState({ entries });
  };

  _handlePage = (page) => {
    this.setState({ page });
  };

  componentDidUpdate = () => {
    debugger;
  };

  render() {
    return (
      <div>
        <Header />
        <Filters
          onSelectCountryCode={this._handleCountryCode}
          selectedCountryCode={this.state.countryCode}
          onSelectEntries={this._handleEntries}
          onSelectType={this._handleType}
          onSelectPage={this._handlePage}
        />
        <ContainerData page={this.state.entries}/>
        <p>{this.state.page}</p>
      </div>
    );
  }
}

export default App;
