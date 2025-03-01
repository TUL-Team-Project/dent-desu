import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    padding: 0 !important;
    font-size: 1em !important;
    border: 2px solid #12736C !important;
    border-radius: 3px !important;
    transition: 0.5s all ease-out !important;}

  .btn-primary:hover  {
    background: #4da29a !important;
    color: white !important;
    margin: 0 auto !important;
    padding: 0 !important;
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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  

  const redirectToAccount = (userData) => {
    console.log(userData);
    if (userData === null) {
      navigate('/login');
    } else {
      switch (userData.role) {
        case 'doctor':
          navigate('/profile');
          break;
        case 'reception':
          navigate('/profile');
          break;
        case 'user':
          navigate('/visits');
          break;
        default:
          navigate('/login');
      }
    }
  }

  const setUserData = (response) => {
    return response.json()
      .then(json => {
        localStorage.setItem('userData', JSON.stringify(json));
        return json;
      })
      .then((user) => {
        redirectToAccount(user);
      });
  }

  const handleSubmit = (event) => {
    let user = email + ':' + password;
    const encodedData = btoa(user);
    localStorage.setItem('user', encodedData);

    fetch(APIS.login, authHeader())
      .then(response => {
        if (response.status === 200) {
          return setUserData(response);
        } else {
          alert('Błędne dane logowania!');
          localStorage.removeItem('user');
          localStorage.removeItem('userData');
          setEmail('');
          setPassword('');
        }
      })
      .catch(error => console.log('error', error));

    event.preventDefault();
  }


    return (
      <>
        <Title>{title}</Title>
        <Styles>
          <div className="Login">
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email">
                <FormLabel column={"sm"}>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormLabel column={"sm"}>Hasło</FormLabel>
                <FormControl
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                />
              </FormGroup>
              <Button block bsSize="large" type="submit" onClick={handleSubmit}>
                Login
            </Button>
            </form>
          </div>
        </Styles>
      </>
    );
  
}

export default Login;
