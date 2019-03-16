import React, { Component } from 'react';
import macrovue from '../utils/macrovue.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import '../styles/Style-app.css';
import moment from 'moment';

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
    const { date } = this.state;
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
          <img src={macrovue} height="50" className="inline-block"/>
            MACROVUE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#Vues">Vues</Nav.Link>
              <Nav.Link href="#Stocks">Stocks</Nav.Link>
              <Nav.Link href="#Watchlist">Watchlist</Nav.Link>
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
              <p>{moment(`${date.year}/${date.month}/${date.day}`).format('dddd,MMM DD, YYYY')}</p>
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
