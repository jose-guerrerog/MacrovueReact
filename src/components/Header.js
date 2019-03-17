import React, { Component } from 'react';
import macrovue from '../utils/macrovue.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import '../styles/style.css';
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
          <img src={macrovue} height="50"/>
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
        <div className="green-section">
          <div className="row">
          <div className="column-header">
            <h1>Activity</h1>
          </div>
          <div className="column-header">
            <div className="row header-user">
              <p>{this.state.username}</p>
            </div>
            <div className="row header-date">
              <p>{moment(`${date.year}/${date.month}/${date.day}`).format('dddd,MMM DD, YYYY')}</p>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Header;
