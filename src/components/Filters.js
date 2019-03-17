import React, { Component } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Button, Nav, Navbar, Form, FormControl, Dropdown, NavItem} from 'react-bootstrap';
import '../styles/Style-app.css'; 

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'ALL',
    };
  }

  getValue = (value, options) => {
    if (!value) { return value }
    debugger;
    const currentOption = options.find(option => option.value === value);
    if (currentOption) { return currentOption }
    return { value, label: value };
  };

  selectCountryCode = (res) => {
    const selectedCountryCode = res.value || res.target.innerHTML;
    this.setState({ country: selectedCountryCode });
    this.props.onSelectPage(selectedCountryCode);
  }

  render() {
    const options = [
      {label: "1", value: 1},
      {label: "2", value: 2},
    ];
    const countries = [
      { label: 'ALL', value: 'ALL' },
      { label: 'JPY', value: 'JPY' },
      { label: 'USD', value: 'USD' },
      { label: 'AUD', value: 'AUD' },
      { label: 'HKD', value: 'HKD' },
      { label: 'EUR', value: 'EUR' },
    ];
    return ( 
      <div>
        <Navbar>
          <Nav className="mr-auto" onClick={this.selectCountryCode}>
            <Nav.Link>ALL</Nav.Link>
            <Nav.Link>JPY</Nav.Link>
            <Nav.Link>USD</Nav.Link>
            <Nav.Link>AUD</Nav.Link>
            <Nav.Link>HKD</Nav.Link>
            <Nav.Link>EUR</Nav.Link>
          </Nav>
        <Select
          placeholder={'Select Country'}
          value={this.getValue(this.state.country, countries)}
          onChange={this.selectCountryCode}
          options={countries}
          className={"select-country"}
        />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
      <hr />
      <div>
        <div className="select-container">
          <span className="label-select">Date Range</span>
          <Select
            placeholder={'Select date range'}
            options={options}
            className={"select-range"}
          />
        </div>
        <div className="select-container">
          <span className="label-select">Showing</span>
          <Select
            placeholder={'10 entries'}
            options={options}
            className={"select-entry"}
          />
        </div>
        <div className="select-container">
          <span className="label-select">Type</span>
          <Select
            placeholder={'Select activity'}
            options={options}
            value={'2'}
            className={"select-activity"}
          />
        </div>
          <Button variant="outline-dark" color="purple">
            <FontAwesomeIcon 
              icon={faFileExport}
            />
            Export
          </Button>
        </div>
    </div>
    );
  }
}

export default Filters;
