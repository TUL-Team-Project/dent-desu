import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardColumns, Card, ListGroup, ListGroupItem, Button, Alert, Tooltip, Image, Overlay, Form, FormControl } from "react-bootstrap";

import { APIS } from './config';
import { authHeader } from './helpers';

const title = "Lista pacjentów";
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

class PatientCard extends Component {

  printPrescription = () => {
    const dataUrl = require(`./assets/recepta.png`);
    window.open(dataUrl, '_blank');
  }

  render() {

    return (
      <Card bg='dark' style={{ marginLeft: '5rem', marginRight: '5rem', marginBottom: '0.3rem' }}>
        <Card.Body style={{ fontSize: 18 }}>
          <BoxL>
            <Card.Text>{this.props.name}  {this.props.surname}</Card.Text>
          </BoxL>
          <BoxR>
            <Link to="/editPatient" className="btn btn-primary" style={{ width: "150px", marginRight: "10px" }}>Edytuj</Link>
            <Link to="/setVisit" className="btn btn-primary" style={{ width: "200px" }}>Dodaj wizytę</Link>
          </BoxR>
        </Card.Body>
      </Card>
    )
  }
}

class PatientList extends React.Component {
  render() {
    return (
      <div>
      {
        this.props.patientData.map((patientData, i) => {
          return (
            <PatientCard
              key={i}
              name={patientData.name}
              surname={patientData.surname}
            />
          )
        })
      }
      </div>
    )
  }
}

class Patients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patientsList: [],
      visibility: 'hidden',
      isReceptionVisibility: 'hidden'
    };
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem('userData'));

    if (userData.role === 'doctor') {
      fetch(APIS.doctor.getMyUsers + userData.doctorID, authHeader())
        .then(response => response.json())
        .then(json => this.setState({ patientsList: json }))
        .catch(error => console.log('error', error));
    } else if (userData.role === 'reception') {
      fetch(APIS.reception.getAllUsers, authHeader())
        .then(response => response.json())
        .then(json => this.setState({ patientsList: json }))
        .catch(error => console.log('error', error));
      this.setState({ isReceptionVisibility: '' })
    }
    else {
      this.setState({ visibility: '' })
    }
  }

  render() {

    return (
      <div>
        <Title>{title}</Title>
        <Link to="/editPatient" className="btn btn-primary" style={{ width: "250px", float: "right", marginRight: "7rem", visibility: this.state.isReceptionVisibility }}>Dodaj nowego pacjenta</Link>
        <Form inline style={{ margin: "5rem" }}>
          <FormControl type="text" placeholder="Szukaj" className="mr-sm-2" />
          <Button className="btn btn-primary">Szukaj</Button>
        </Form>
        <PatientList
          patientData={this.state.patientsList} />
        <Subtitle style={{ visibility: this.state.visibility }}>Brak dostępu do danych pacjentów</Subtitle>
      </div>
    )
  }
}

export default Patients;
