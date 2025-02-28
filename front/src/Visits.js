import React, { Component } from 'react';
import { Button, Card, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Checkout } from './components/Payments/Checkout';
import { APIS } from './config';
import { authHeader } from './helpers';

const title = "Twoje wizyty";
const subtitle1 = "Nadchodzące";
const subtitle2 = "Zakończone";



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

class VisitCard extends Component {

  render() {
    let visible = this.props.done ? '' : 'hidden';
    let visible2 = this.props.done ? 'hidden' : '';

    let diagnosisVisibility = this.props.visitDiagnosis ? '' : 'hidden';

    return (
      <Card bg='dark' style={{ margin: '5rem' }}>
        <Card.Header style={{ fontSize: 20 }}>{this.props.time}</Card.Header>
        <Card.Body>
          <BoxL>
            <BoxL><Image src={`images/doctors/${this.props.photo}`} roundedCircle width={120} height={120} /></BoxL>
            <BoxR style={{ margin: '1rem' }}>
              <Card.Title>{this.props.name} {this.props.surname}</Card.Title>
              <Card.Text> {this.props.speciality} </Card.Text>
              <Card.Text style={{ fontStyle: 'italic', visibility: diagnosisVisibility }}>Diagnoza: {this.props.visitDiagnosis}</Card.Text>
            </BoxR>
          </BoxL>
          <BoxR>
            { !this.props.done && (
              <Checkout price={this.props.price} name={`${this.props.name} ${this.props.surname}`} appointmentId={this.props.appointmentId}/>
            )}
          </BoxR>
        </Card.Body>
      </Card>
    )

    if (0) return (
      <Card bg='dark' style={{ margin: '5rem' }}>
        <Card.Header style={{ fontSize: 20 }}>{this.props.time}</Card.Header>
        <Card.Body>
          <BoxL>
            <BoxL><Image src={`images/doctors/${this.props.photo}`} roundedCircle width={120} height={120} /></BoxL>
            <BoxR style={{ margin: '1rem' }}>
              <Card.Title>{this.props.name} {this.props.surname}</Card.Title>
              <Card.Text> {this.props.speciality} </Card.Text>
              <Card.Text style={{ fontStyle: 'italic', visibility: diagnosisVisibility }}>Diagnoza: {this.props.visitDiagnosis}</Card.Text>
            </BoxR>
          </BoxL>
          <BoxR>
            <BoxTop><Button variant="primary" style={{ margin: '0.5rem', width: 150, visibility: visible2 }} >ODWOŁAJ</Button> </BoxTop>
            <BoxBottom><Button variant="primary" style={{ margin: '0.5rem', width: 150, visibility: visible2 }}>ZMIEŃ</Button>  </BoxBottom>
            <Button variant="primary" style={{ width: 150, visibility: visible }}>SZCZEGÓŁY</Button>
          </BoxR>
        </Card.Body>
      </Card>
    )
  }
}

class VisitsList extends React.Component {
  render() {
    return (
      <div>{
        this.props.visitData.map((visitData, i) => {
          let date = new Date(visitData.dateTime);
          date = date.toDateString();
          return (
            <VisitCard
              key={i}
              time={date}
              photo={visitData.doctor.avatarPath}
              name={visitData.doctor.name}
              surname={visitData.doctor.surname}
              speciality={visitData.doctor.specialization}
              visitDiagnosis={visitData.diagnosis}
              price={visitData.price}
              appointmentId={visitData.appointmentID}
              done={this.props.done}
            />
          )
        })
      }
      </div>
    )
  }
}

class Visits extends Component {

  state = {
    myFutureVisits: [],
    myPastVisits: []
  }

  getDoctors() {
    return fetch(APIS.getDoctors)
      .then(response => response.json())
      .then(doctors => {
        const doctorsObject = {};
        doctors.forEach(doctor => {
          doctorsObject[doctor.doctorID] = doctor;
        });
        return doctorsObject;
      })
      .catch(error => console.log('error', error));
  }

  getPastVisits() {
    let userData = JSON.parse(localStorage.getItem('userData'));

    return fetch(APIS.user.pastVisits + userData.userID, authHeader())
      .then(response => response.json())
      .catch(error => console.log('error', error))
      
  }

  getFutureVisits() {
    let userData = JSON.parse(localStorage.getItem('userData'));

    return fetch(APIS.user.futureVisits + userData.userID, authHeader())
      .then(response => response.json())
      .catch(error => console.log('error', error));
  }

  componentDidMount() {
    Promise.all([
      this.getDoctors(),
      this.getPastVisits(),
      this.getFutureVisits()
    ])
    .then(([doctors, pastVisits, futureVisits]) => {

      pastVisits = pastVisits.map(visit => {
        visit.doctor = doctors[visit.doctorId];
        return visit;
      });

      futureVisits = futureVisits.map(visit => {
        visit.doctor = doctors[visit.doctorId];
        return visit;
      });

      console.log(doctors, pastVisits, futureVisits)
      this.setState({ doctors: doctors });
      this.setState({ myPastVisits: pastVisits });
      this.setState({ myFutureVisits: futureVisits });
    })
  }

  render() {

    return (
      <div>
        <Title>{title}</Title>
        <Link to="/setvisit" className="btn btn-primary" style={{ width: 150, float: 'right', marginRight: '7rem' }}>UMÓW WIZYTĘ</Link>
        <Subtitle>{subtitle1}</Subtitle>
        <VisitsList
          visitData={this.state.myFutureVisits}
          done={false} 
        />
        <Subtitle>{subtitle2}</Subtitle>
        <VisitsList
          visitData={this.state.myPastVisits} 
          done={true}
        />
      </div>
    )
  }
}



export default Visits;
