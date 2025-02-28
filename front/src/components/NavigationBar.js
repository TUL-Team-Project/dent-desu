import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/plus.svg';

const Styles = styled.div`
  .navbar {
    background-color: transparent;
  }
  a, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand { 
    display: flex;
    align-items: center;
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand>img {
    margin: 3px 14px;
  }
  .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background: #12736C !important;
    color: white !important;
    font-size: 1em !important;
    margin-left: 1em !important;
    padding: 0.25em 1em !important;
    border: 2px solid #12736C !important;
    border-radius: 3px !important;
    transition: 0.5s all ease-out !important;

    &:hover {
      background: #4da29a !important;
      color: white !important;
      font-size: 1em !important;
      margin-left: 1em !important;
      padding: 0.25em 1em !important;
      border: 2px solid #4da29a !important;
      border-radius: 3px;  !important
    }
  }
  .btn-nav-login {
    margin-top: 2px;
  }
  .nav-item > .external-nav-link {
    &:hover {
      color: #bbb;
    }
    &:visited {
      color: #bbb;
    }
  }
`

// todo img 

export const NavigationBar = () => (
  <Styles>
    <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <Logo 
            width="30"
            height="30"/>{' '}
          PlusMed
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link class="nav-link" to="/priceList">Cennik</Link>
          </Nav.Item>
          <Nav.Item>
            <Link class="nav-link" to="/about">Specjaliści</Link>
          </Nav.Item>
          <Nav.Item>
            <Link class="nav-link" to="/offer">Oferta</Link>
          </Nav.Item>
          <Nav.Item>
            <Link class="nav-link" to="/contact">Kontakt</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login">
              <Button className="btn-nav-login">Zaloguj</Button>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar;
