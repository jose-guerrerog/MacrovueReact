import React, { Component } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Button, Nav, Navbar, Form, FormControl, Dropdown, NavItem} from 'react-bootstrap';
import { NavDropdown, Grid} from 'react-bootstrap';
import '../styles/Style-app.css'; 

class Filters extends Component {
  
  selectCountryCode = (res) => {
    this.props.onSelectPage(res.target.innerHTML);
  }

  render() {
    const options = [
      {label: "1", value: 1},
      {label: "2", value: 2},
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <hr />
      <div class="row">
        <div class="col-md-6">
            <label for="sRange" className = "search"><span className ="monospace">
              Date range: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
              <Select
              id='sRange'
              placeholder={'Select data range'}
              options={options}
              className="select-range"
            />
        </label><br />
            <label for='sRange'>Range</label>

            <Select
              id='sRange'
              placeholder={'Select data range'}
              options={options}
              className="select-range"
            />
        </div>
        <div class="col-md-6">
          <p class="text-left col-md-3">Entries</p>
          <Select
            placeholder={'10 entries'}
            options={options}
            className="col-md-3"
          />
          <p class="text-left">Type</p>
          <Select
            placeholder={'Select activity'}
            options={options}
            className="select-range"
          />
          <Button variant="outline-dark" color="purple">
            <FontAwesomeIcon 
              icon={faFileExport}
            />
            Export
          </Button>
        </div>
      </div>
      <hr />
      </div>
    );
  }
}

export default Filters;
