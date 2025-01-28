import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { instanceOf } from "prop-types";

import { APIS } from '../config';
import { authHeader } from '../helpers';

const title = "Zaloguj się";

const Styles = styled.div`
  // width:100vw;
  // height:100vw;

  .Login {
    padding: 0 0 80px 0; 
  }

  .Login form {
    margin: 0 auto;
    max-width: 320px;
  }
  .btn-primary, .btn-primary:active, .btn-primary:visited, .btn-primary:focus, .btn-primary:active:focus {
    background: #12736C !important;
    color: white !important;
    margin: 0 auto !important;
    padding 0 !important;
    font-size: 1em !important;
    border: 2px solid #12736C !important;
    border-radius: 3px !important;
    transition: 0.5s all ease-out !important;}

  .btn-primary:hover  {
    background: #4da29a !important;
    color: white !important;
    margin: 0 auto !important;
    padding 0 !important;
    font-size: 1em !important;
    border: 2px solid #4da29a !important;
    border-radius: 3px; !important;
    transition: 0.5s all ease-out !important;
  }
  .btn-nav-login {
    margin-top: 2px;
  }
`

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-top: 4em;
  // margin-left: 20%;
  margin-bottom: 2em;
`;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginStatus: 0,
      body: JSON.parse(localStorage.getItem('userData'))
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    let user = this.state.email + ':' + this.state.password;
    var encodedData = btoa(user);
    localStorage.setItem('user', encodedData);

    fetch(APIS.login, authHeader())
      .then(response => {
        if (response.status === 200) {
          return this.setUserData(response);
        } else {
          alert('Błędne dane logowania!');
          localStorage.removeItem('user');
          localStorage.removeItem('userData');
          this.setState({ email: '', password: '' });
        }
      })
      .catch(error => console.log('error', error));

    event.preventDefault();
  }

  setUserData(response) {
    return response.json()
      .then(json => {
        localStorage.setItem('userData', JSON.stringify(json));
      })
      .then(() => {
        this.redirectToAccount();
      });
  }

  redirectToAccount() {
    const { history } = this.props;
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null) {
      if (history) history.push('/login');
    } else {
      switch (userData.role) {
        case 'doctor':
          if (history) history.push('/profile');
          break;
        case 'reception':
          if (history) history.push('/profile');
          break;
        case 'user':
          if (history) history.push('/visits');
          break;
        default:
          if (history) history.push('/login');
      }
    }
  }

  render() {
    return (
      <>
        <Title>{title}</Title>
        <Styles>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormLabel>Hasło</FormLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  type="password"
                />
              </FormGroup>
              <Button block bsSize="large" type="submit" onClick={this.handleSubmit.bind(this)}>
                Login
            </Button>
            </form>
          </div>
        </Styles>
      </>
    );
  }
}

export default Login;
