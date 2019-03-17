import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import ContainerData from './ContainerData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'ALL',
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
          onSelectCountryCode={this._handleCountryCode}
          selectedCountryCode={this.state.countryCode}
          onSelectEntries={this._handleEntries}
          selectedEntry={this.state.entries}
          onSelectType={this._handleType}
          selectedType={this.state.type}  
          onSelectPage={this._handlePage}
          selectedPage={this.state.page}
        />
        <ContainerData page={this.state.entries}/>
        <p>{this.state.page}</p>
      </div>
    );
  }
}

export default App;
