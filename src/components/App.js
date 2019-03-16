import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import ContainerData from './ContainerData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'AUS',
      type: 'ALL',
      entries: 10,
      page: 1,
    };
  }
  
  _handlePage = (page) => {
    this.setState({ page });
  };

  componentDidUpdate = () => {
    debugger;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Filters 
          onSelectPage={this._handlePage}
          selectedPage={this.state.page}
          onSelectEntries={this._handleEntries}
          selectedEntry={this.state.entries} 
          onSelectType={this._handleType}
          selectedType={this.state.type} 
          onSelectCountryCode={this._handleCountryCode}
          selectedCountry={this.state.country}
        />
        <ContainerData page={this.state.entries}/>
        <p>{this.state.page}</p>
      </div>
    );
  }
}

export default App;
