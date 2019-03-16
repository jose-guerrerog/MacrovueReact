import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import macrovue from '../utils/macrovue.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Maz Zaman',
      date: {
        day: 24,
        month: 2,
        year: 2019,
      },
    };
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
          <img src={macrovue} height="50" className="inline-block"/>
            MACROVUE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>Dashboard</Nav.Link>
              <Nav.Link href="#pricing">Vues</Nav.Link>
              <Nav.Link href="#deets">Stocks</Nav.Link>
              <Nav.Link href="#deets">Watchlist</Nav.Link>
              <NavDropdown title="Activity" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Activity</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row className="green-section">
          <Col className="col-md-6">
            <p>Activity</p>
          </Col>
          <Col className="col-md-6">
            <Row>
              <p>{this.state.username}</p>
            </Row>
            <Row>
              <p>{this.state.username}</p>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
