import React, { Component } from 'react';
import Select from 'react-select';
import { Button, Nav, Navbar, Form, FormControl, Dropdown} from 'react-bootstrap';

class Filters extends Component {
  
  changeToAUS = () => {
    this.props.onSelectPage(2);
  }

  render() {
    const options = [
      {label: "1", value: 1},
      {label: "2", value: 2},
    ];
    return (
      <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={this.changeToAUS}>ALL</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <div class="row">
        <div class="col-md-6">
          <p class="text-left">Date Range</p>
          <Select
            placeholder={'Select data range'}
            options={options}
          />
        </div>
        <div class="col-md-6">
            <p class="text-left">Entries</p>
            <Select
              placeholder={'Select data range'}
              options={options}
            />
            <p class="text-left">Type</p>
            <Select
              placeholder={'Select data range'}
              options={options}
            />
          </div>
      </div>
      </div>
      
    );
  }
}

export default Filters;
