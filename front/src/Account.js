import React, { Component } from 'react'
import styled from 'styled-components';
import { CardColumns, Card, ListGroup, ListGroupItem, Button, Alert, Col, Image } from "react-bootstrap";

const title = "Twoje wizyty";
const subtitle1 = "Nadchodzące";
const subtitle2 = "Zakończone";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-top: 4em;
  // margin-left: 5%;
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

    return (
      <Card bg='dark' style={{ margin: '5rem' }}>
        <Card.Header style={{ fontSize: 20 }}>{this.props.time}</Card.Header>
        <Card.Body>
          <BoxL>
            <BoxL><Image src={require(`./assets/${this.props.photo}.jpg`)} roundedCircle width={120} height={120} /></BoxL>
            <BoxR style={{ margin: '1rem' }}>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text> {this.props.speciality} </Card.Text>
              <Card.Text style={{ fontStyle: 'italic' }}> {this.props.visitType} </Card.Text>
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
          return (
            <VisitCard
              key={i}
              time={visitData.time}
              photo={visitData.photo}
              name={visitData.name}
              speciality={visitData.speciality}
              visitType={visitData.visitType}
              done={visitData.done}
            />
          )
        })
      }
      </div>
    )
  }
}

class Account extends Component {

  myFutureVisits = [
    {
      time: '23 lipca 2020  19:00',
      photo: 'doctork3',
      name: 'Renata Polak',
      speciality: 'Dermatolog',
      visitType: 'Zabieg',
      done: true
    },
    {
      time: '12 sierpnia 2020  18:00',
      photo: 'doctorm1',
      name: 'Jan Kowalski',
      speciality: 'Alergolog',
      visitType: 'Zwykła wizyta',
      done: false
    },
    {
      time: '4 września 2020  18:00',
      photo: 'doctorm2',
      name: 'Alojzy Gżegżółka',
      speciality: 'Kardiolog',
      visitType: 'Zwykła wizyta',
      done: false
    }
  ]

  myPassVisits = [
    {
      time: '18 stycznia 2020  12:30',
      photo: 'doctork2',
      name: 'Jolanta Małysz',
      speciality: 'Dermatolog',
      visitType: 'Zabieg',
      done: true
    },
    {
      time: '2 stycznia 2020  18:00',
      photo: 'doctorm1',
      name: 'Jan Kowalski',
      speciality: 'Alergolog',
      visitType: 'Zwykła wizyta',
      done: true
    }
  ]

  render() {

    return (
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle1}</Subtitle>
        <VisitsList
          visitData={this.myFutureVisits} />
        <Subtitle>{subtitle2}</Subtitle>
        <VisitsList
          visitData={this.myPassVisits} />
      </div>
    )
  }
}



export default Account;
