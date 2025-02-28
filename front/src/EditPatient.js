import React, { Component } from 'react';
import { Button, Card, Form, FormControl, Image, InputGroup, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { APIS } from './config';

const title = "Dodawanie pacjenta";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-top: 4em;
  // margin-left: 20%;
  margin-bottom: 2em;
`;

const Subtitle = styled.h1`
  font-size: 1.5em;
  margin-left: 5%;
  margin-top: 1em;
`;

const BoxL = styled.div`
  float:left; 
  align: center;
`

const BoxR = styled.div`
  float:right;  
  align: center;
`

const BoxTop = styled.div`
  float:top;
  align: center;
`

const BoxBottom = styled.div`
  float:bottom; 
  align: center;
`

const Centered = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

class EditPatient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      pesel: '',
      birthDate: '',
      gender: '',
      address: '',
      phone: '',
      email: '',
      password: '',
      role: 'user'
    };  
  }

  postHeader(method = 'POST', body) {
    if (true) {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json')
  
      var myInit = {
        method: method,
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
      }
  
      if(body) {
        myInit.body = JSON.stringify(body);
      }
  
      return myInit;
    }
  }

  signUp() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    return fetch(APIS.signUp, this.postHeader('POST', {
      name: this.state.name,
      surname: this.state.surname,
      pesel: this.state.pesel,
      birthDate: this.state.birthDate,  /// String: rok(4cyrfy)-miesiąc-dzień
      gender: this.state.gender,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }))
    .then(response => {
      if (response.status === 200) {
        this.redirectToPatients();
      } else {
        alert('Niepowodzenie!');
      }
    })
    .catch(error => console.log('error', error));
  }

  redirectToPatients(){
    const { history } = this.props;
    history.push('/patients');
  }



  generatePassword(event) {
    this.setState({
      password: 'test'
    });
    event.preventDefault();
  }

  genderCheck(){
    var genderNumber = (this.state.pesel).substring(9, 10)
    if (genderNumber ===  '0' || 
        genderNumber ===  '2' || 
        genderNumber ===  '4' || 
        genderNumber ===  '6' || 
        genderNumber ===  '8'){
          this.setState({gender: 'k'}, () => this.birthDateCheck())
        } else {
          this.setState({gender: 'm'}, () => this.birthDateCheck())
        }
  }

  birthDateCheck(){
    var aInt = new Array();
    var s = (this.state.pesel)
    for (var i=0;i<11; i++)
    {
      aInt[i] = parseInt(s.substring(i,i+1));
    }
    var rok = 1900+aInt[0]*10+aInt[1];
    if (aInt[2]>=2 && aInt[2]<8)
      rok+=Math.floor(aInt[2]/2)*100;
    if (aInt[2]>=8)
      rok-=100;

    var miesiac = (aInt[2]%2)*10+aInt[3];
    if (miesiac < 10)
      miesiac = `0${miesiac}`
    var dzien = aInt[4]*10+aInt[5];
    if (dzien < 10)
      dzien = `0${dzien}`

    var date = `${rok}-${miesiac}-${dzien}`;
    this.setState({birthDate: date});
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSurnameChange = (event) => {
    this.setState({ surname: event.target.value });
  }

  handlePeselChange = (event) => {
    this.setState({ pesel: event.target.value }, () => this.genderCheck());
  }

  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  }

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  savePatient(event) {
    console.log(
      "Imie ", this.state.name," ",
      "Nazwisko ", this.state.surname," ",
      "Pesel ", this.state.pesel," ",
      "data ", this.state.birthDate," ",
      "płeć ", this.state.gender," ",
      "adres ", this.state.address," ",
      "telefon ", this.state.phone," ",
      "mail ", this.state.email," ",
      "hasło ", this.state.password," ",
      "rola ", this.state.role
    );
    this.signUp()
  }


  render() {

    return (
      <div>
        <Title>{title}</Title>
        <Centered style={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <Image src={require(`./assets/avatar-placeholder.png`)} roundedCircle width={180} height={180} />
        </Centered>
        <Centered>
          <input id="myInput" type="file" accept="image/*" ref={(ref) => this.upload = ref} style={{ display: 'none' }} />
          <Button onClick={(e) => this.upload.click()}>DODAJ ZDJĘCIE</Button>
        </Centered>
        <Card bg='dark' style={{ margin: '5rem' }}>
          <Card.Header style={{ fontSize: 20 }}>Dane osobiste</Card.Header>
          <Card.Body>
            <Table hover variant="dark">
              <tbody>
                <tr> <td width={'50%'}>Imię</td> <td><Form.Control type="text" placeholder=""
                  value={this.state.name}
                  onChange={this.handleNameChange} />
                </td> </tr>
                <tr> <td width={'50%'}>Nazwisko</td> <td><Form.Control type="text" placeholder=""
                  value={this.state.surname}
                  onChange={this.handleSurnameChange} />
                </td> </tr>
                <tr> <td>Pesel</td> <td><Form.Control type="text" placeholder=""
                  value={this.state.pesel}
                  onChange={this.handlePeselChange} />
                </td> </tr>
                <tr> <td>Data urodzenia</td> <td>{this.state.birthDate}</td> </tr>
                <tr> <td>Płeć</td> <td>{this.state.gender}</td> </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card bg='dark' style={{ margin: '5rem' }}>
          <Card.Header style={{ fontSize: 20 }}>Dane kontaktowe</Card.Header>
          <Card.Body>
            <Table hover variant="dark">
              <tbody>
                <tr> <td width={'50%'}>Adres</td> <td><Form.Control type="text" placeholder=""
                  value={this.state.address}
                  onChange={this.handleAddressChange} />
                </td> </tr>
                <tr> <td>Telefon</td> <td><Form.Control type="text" placeholder=""
                  value={this.state.phone}
                  onChange={this.handlePhoneChange} />
                </td> </tr>
                <tr> <td>Adres e-mail</td> <td><Form.Control type="email" placeholder=""
                  value={this.state.email}
                  onChange={this.handleEmailChange} />
                </td> </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card bg='dark' style={{ margin: '5rem' }}>
          <Card.Header style={{ fontSize: 20 }}>Dane logowania</Card.Header>
          <Card.Body>
            <Table hover variant="dark">
              <tbody>
                <tr> <td width={'50%'}>Adres e-mail</td> <td>{this.state.email}</td> </tr>
                <tr> <td width={'50%'}>Hasło</td> <td>
                  <InputGroup className="mb-1">
                    <FormControl placeholder="" value={this.state.password} />
                    <InputGroup.Append><Button variant="primary" onClick={this.generatePassword.bind(this)}>Generuj hasło</Button></InputGroup.Append>
                  </InputGroup>
                </td> </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Button className="btn btn-primary" onClick={this.savePatient.bind(this)} style={{ width: 200, float: 'right', marginRight: '7rem' }}>ZAPISZ</Button>
        <Link to="/patients" className="btn btn-primary" style={{ width: 200, float: 'right', marginRight: '1rem' }}>ANULUJ</Link>
      </div>
    )
  }
}


export default EditPatient;
