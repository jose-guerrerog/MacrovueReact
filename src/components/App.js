import React, { Component } from 'react';
import Header from './Header';
import Filters from './Filters';
import ContainerData from './ContainerData';
import '../styles/style.css';
import { fakeData } from './FakeData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'ALL',
      type: 'ALL',
      entries: 5,
      data: fakeData,
      displayData: true,
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

  _toggleDisplayData = () => {
    this.setState({ displayData: !this.state.displayData});
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {
      countryCode,
      type
    } = this.state;

    if (countryCode !== prevState.countryCode || type !== prevState.type)
    {
      const dataByCountry = countryCode === 'ALL' ? fakeData : fakeData.filter( x => x.countryCode === countryCode);
      const dataByType = type === 'ALL' ? dataByCountry : dataByCountry.filter(x => x.type === type);
      this.setState({ data: dataByType });
    }
  };

  render() {
    const {countryCode} = this.state;
    const dataByCountry = countryCode === 'ALL' ? fakeData : fakeData.filter( x => x.countryCode === countryCode);
    const getUniqueTypes = dataByCountry.map(x=>x.type).filter((v, i, a) => a.indexOf(v) === i);
    let uniqueTypes = [];
    getUniqueTypes.forEach( x => uniqueTypes.push({label: x, value: x}));
    
    return (
      <div>
        <Header />
        <Filters
          onSelectCountryCode={this._handleCountryCode}
          selectedCountryCode={this.state.countryCode}
          onSelectEntries={this._handleEntries}
          selectedEntries={this.state.entries}
          onSelectType={this._handleType}
          selectedType={this.state.type}
          optionTypes={uniqueTypes}
          onToggleDisplayData={this._toggleDisplayData}
        />
        {
          this.state.displayData ?
          <ContainerData 
            data={this.state.data}
            selectedSizePage={this.state.entries}
          />
          :
          null
        }
      </div>
    );
  }
}

export default App;
