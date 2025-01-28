import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardColumns, Card, ListGroup, ListGroupItem, Button, Alert, Tooltip, Image, Table } from "react-bootstrap";

const title = "Twoje skierowania";

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

class ReferralCard extends Component {

  printPrescription = () => {
    const dataUrl = require(`./assets/skierowanie.jpg`);
    window.open(dataUrl, '_blank');
  }

  render() {

    return (
      <Card bg='dark' style={{ margin: '5rem' }}>
        <Card.Header style={{ fontSize: 18 }}>Data wystawienia: {this.props.setDate}</Card.Header>
        <Card.Body>
          <BoxL style={{ width: '50rem' }}>
            <Table style={{ width: '50rem' }} hover variant="dark">
              <tbody>
                <tr> <td width={'50%'}>Typ skierowania</td> <td>{this.props.referralType}</td> </tr>
                <tr> <td>Miejsce realizacji</td> <td>{this.props.refferalPlace}</td> </tr>
                <tr> <td>Rozpoznanie</td> <td>{this.props.diagnosis}</td> </tr>
                <tr> <td>Osoba wystawiająca</td> <td>{this.props.doctor}</td> </tr>
              </tbody>
            </Table>
            {/* <Card.Text> {this.props.referralType} </Card.Text>
          <Card.Title>{this.props.refferalPlace}</Card.Title>
          <Card.Text> {this.props.diagnosis} </Card.Text>
          <Card.Text> {this.props.doctor} </Card.Text> */}
          </BoxL>
          <BoxR>
            <Button variant="primary" style={{ width: 150 }}
              onClick={this.printPrescription}>WYDRUK</Button>
          </BoxR>
        </Card.Body>
        <Card.Footer style={{ fontSize: 20 }}>Kod dostępu: {this.props.accessCode}</Card.Footer>
      </Card>
    )
  }
}

class ReferralsList extends React.Component {
  render() {
    return (
      <div>{
        this.props.referralData.map((referralData, i) => {
          return (
            <ReferralCard
              key={i}
              barcode={referralData.barcode}
              accessCode={referralData.accessCode}
              setDate={referralData.setDate}
              referralType={referralData.referralType}
              refferalPlace={referralData.refferalPlace}
              diagnosis={referralData.diagnosis}
              doctor={referralData.doctor}
            />
          )
        })
      }
      </div>
    )
  }
}

class Referrals extends Component {

  referralsList = [
    {
      barcode: '123456789123456',
      accessCode: '9685',
      setDate: '1 marca 2020',
      referralType: 'Skierowanie do szpitala',
      refferalPlace: 'Oddział kardiologiczny (4100)',
      diagnosis: 'I10 Nadciśnienie tętnicze',
      doctor: 'Alojzy Gżegżółka'
    },
    {
      barcode: '789456123789456',
      accessCode: '2547',
      setDate: '10 listopada 2019',
      referralType: 'Skierowanie do poradni specjalistycznej',
      refferalPlace: 'Poradnia Chirurgii Ręki',
      diagnosis: 'Zerwanie więzadła pobocznego',
      doctor: 'Amir Mazur'
    }
  ]

  render() {

    return (
      <div>
        <Title>{title}</Title>
        <ReferralsList
          referralData={this.referralsList} />
      </div>
    )
  }
}


export default Referrals;
