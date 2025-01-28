import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardColumns, Card, ListGroup, ListGroupItem, Button, Alert, Tooltip, Image, Overlay } from "react-bootstrap";

const title = "Twoje recepty";
const subtitle1 = "Aktywne";
const subtitle2 = "Po terminie realizacji";

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

class PrescriptionCard extends Component {

  printPrescription = () => {
    const dataUrl = require(`./assets/recepta.png`);
    window.open(dataUrl, '_blank');
  }

  render() {
    let visible = this.props.pass ? 'hidden' : '';

    return (
      <Card bg='dark' style={{ margin: '5rem' }}>
        <Card.Header style={{ fontSize: 18 }}>Data wystawienia: {this.props.setDate}</Card.Header>
        <Card.Body>
          <BoxL>
            <Card.Title>{this.props.medicineName}</Card.Title>
            <Card.Text> {this.props.medicineData} </Card.Text>
          </BoxL>
          <BoxR>
            <Button variant="primary" style={{ width: 150, visibility: visible }}
              onClick={this.printPrescription}>WYDRUK</Button>
          </BoxR>
        </Card.Body>
        <Card.Footer style={{ fontSize: 20 }}>Kod dostępu: {this.props.accessCode}</Card.Footer>
      </Card>
    )
  }
}

class PrescriptionsList extends React.Component {
  render() {
    return (
      <div>{
        this.props.prescriptionData.map((prescriptionData, i) => {
          return (
            <PrescriptionCard
              key={i}
              barcode={prescriptionData.barcode}
              accessCode={prescriptionData.accessCode}
              setDate={prescriptionData.setDate}
              medicineName={prescriptionData.medicineName}
              medicineData={prescriptionData.medicineData}
              pass={prescriptionData.pass}
            />
          )
        })
      }
      </div>
    )
  }
}

class Prescriptions extends Component {

  activePrescriptionsList = [
    {
      barcode: '123456789123456',
      accessCode: '9685',
      setDate: '1 marca 2020',
      medicineName: 'Tardyferon-Fol',
      medicineData: '80 mg+0,35 mg, tabletki o przedłużonym uwalnianiu, 30 szt. ',
      pass: false
    },
    {
      barcode: '123456789123456',
      accessCode: '5020',
      setDate: '12 maja 2020',
      medicineName: 'Prevenar 13',
      medicineData: '0,5ml, iniekcja, szczepionka przeciw pneumokokom, 1 ampułko-strzyk. + igła',
      pass: false
    }
  ]

  passPrescriptionsList = [
    {
      barcode: '123456789123456',
      accessCode: '8756',
      setDate: '30 stycznia 2020',
      medicineName: 'Heparegen',
      medicineData: '100 mg, tabletki, 100 szt.',
      pass: true
    },
    {
      barcode: '123456789123456',
      accessCode: '7074',
      setDate: '1 grudnia 2019',
      medicineName: 'Frimig',
      medicineData: '100 mg, tabletki powlekane, 6 szt.',
      pass: true
    }
  ]

  render() {

    return (
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle1}</Subtitle>
        <PrescriptionsList
          prescriptionData={this.activePrescriptionsList} />
        <Subtitle>{subtitle2}</Subtitle>
        <PrescriptionsList
          prescriptionData={this.passPrescriptionsList} />
      </div>
    )
  }
}



export default Prescriptions;
