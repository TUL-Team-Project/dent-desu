import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { CardColumns, Card, ListGroup, ListGroupItem, Button, Alert, Col, Image, Table } from "react-bootstrap";

const title = "Twój profil";


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

const DataText = styled.h1`
  font-size: 1em;
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
`;

class ContactDataCard extends Component {

  userData = JSON.parse(localStorage.getItem('userData'));

  render() {

    if (this.userData.role === 'user') {
      return (
        <Card bg='dark' style={{ margin: '5rem' }}>
          <Card.Header style={{ fontSize: 20 }}>Dane kontaktowe</Card.Header>
          <Card.Body>
            <Table hover variant="dark">
              <tbody>
                <tr> <td width={'50%'}>Adres</td> <td>{this.props.adress}</td> </tr>
                <tr> <td>Telefon</td> <td>{this.props.phone}</td> </tr>
                <tr> <td>Adres e-mail</td> <td>{this.props.mail}</td> </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )
    } else {
      return (
        <Card bg='dark' style={{ margin: '5rem' }}>
          <Card.Header style={{ fontSize: 20 }}>Dane kontaktowe</Card.Header>
          <Card.Body>
            <Table hover variant="dark">
              <tbody>
                <tr> <td>Telefon</td> <td>{this.props.phone}</td> </tr>
                <tr> <td>Adres e-mail</td> <td>{this.props.mail}</td> </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )
    }
  }
}

class ProfileCard extends Component {

  gender = (this.props.gender === 'k') ? 'Kobieta' : 'Mężczyzna';
  userData = JSON.parse(localStorage.getItem('userData'));
  
  render() {

    if (this.userData.role === 'user') {
      return (
        <Card bg='dark' style={{ margin: '5rem' }}>
          <Card.Header style={{ fontSize: 20 }}>Dane osobiste</Card.Header>
          <Card.Body>
            <Table hover variant="dark">
              <tbody>
                <tr> <td width={'50%'}>Imię i nazwisko</td> <td>{this.props.name}</td> </tr>
                <tr> <td>Pesel</td> <td>{this.props.pesel}</td> </tr>
                <tr> <td>Data urodzenia</td> <td>{this.props.birthDate}</td> </tr>
                <tr> <td>Płeć</td> <td>{this.gender}</td> </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )
    } else {
      return (
        <Card bg='dark' style={{ margin: '5rem' }}>
          <Card.Header style={{ fontSize: 20 }}>Dane osobiste</Card.Header>
          <Card.Body>
            <Table hover variant="dark">
              <tbody>
                <tr> <td width={'50%'}>Imię i nazwisko</td> <td>{this.props.name}</td> </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )
    }
  }
}

function getPerson() {
  let userData = JSON.parse(localStorage.getItem('userData'));
  let person = null;
  if (userData === null) {
    return person;
  } else {
    switch (userData.role) {
      case 'doctor':
        person = {
          photo: userData.avatarPath,
          name: userData.name + ' ' + userData.surname,
          pesel: userData.pesel,
          birthDate: userData.birthDate,
          gender: '-',
          adress: '-',
          phone: userData.phone,
          mail: userData.email
        }
        return person;
      case 'reception':
        person = {
          photo: userData.avatarPath,
          name: userData.name + ' ' + userData.surname,
          pesel: userData.pesel,
          birthDate: userData.birthDate,
          gender: '-',
          adress: '-',
          phone: userData.phone,
          mail: userData.email
        }
        return person;
      case 'user':
        person = {
          photo: userData.avatarPath,
          name: userData.name + ' ' + userData.surname,
          pesel: userData.pesel,
          birthDate: userData.birthDate,
          gender: userData.gender,
          adress: userData.address,
          phone: userData.phone,
          mail: userData.email
        }
        return person;
      default:
        return person;
    }
  }
}


class Profile extends Component {

  person = getPerson()

  render() {
    if (!this.person) {
      return (
        <Navigate to="/login" />
      );
    }

    return (
      <div>
        <Title>{title}</Title>
        <Centered style={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <Image src={`images/doctors/${this.person.photo}`} roundedCircle width={180} height={180} />
        </Centered>
        <Centered>
          <input id="myInput" type="file" accept="image/*" ref={(ref) => this.upload = ref} style={{ display: 'none' }} />
          <Button onClick={(e) => this.upload.click()} style={{display: "none"}}>ZMIEŃ ZDJĘCIE</Button>
        </Centered>
        <ProfileCard
          photo={this.person.photo}
          name={this.person.name}
          pesel={this.person.pesel}
          birthDate={this.person.birthDate}
          gender={this.person.gender} />
        <ContactDataCard
          adress={this.person.adress}
          phone={this.person.phone}
          mail={this.person.mail} />
      </div>
    )
  }
}

export default Profile;
