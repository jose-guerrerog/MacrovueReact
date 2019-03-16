import React, { Component } from 'react';
import macrovue from '../utils/macrovue.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import '../styles/Style-app.css';

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
        <div class="green-section">
          <div class="row">
          <div class="column-header">
            <p>Activity</p>
          </div>
          <div class="column-header">
            <div class="row">
              <p>gygu</p>
            </div>
            <div class="row">
              <p>{this.state.username}</p>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Header;
