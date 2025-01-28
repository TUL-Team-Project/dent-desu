import React from 'react'
import styled from 'styled-components';
import { CardColumns, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const title = "Cennik";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-top: 4em;
  // margin-left: 20%;
  margin-bottom: 2em;
`;

const BoxL = styled.div`
  float:left; 
  align: center;
`

const BoxR = styled.div`
  float:right;  
  align: center;
`

export const PriceList = () => (
  <div>
    <Title>{title}</Title>
    <Card bg='dark' style={{ margin: '5rem' }}>
      <Card.Body>
        <Card.Title>Alergologia</Card.Title>
      </Card.Body>
      <ListGroup variant="flush" bg='dark'>
        <ListGroupItem variant="dark">
          <BoxL>Konsultacje</BoxL>
          <BoxR>120 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Zabieg</BoxL>
          <BoxR>300 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Wypisanie recepty</BoxL>
          <BoxR>50 zł</BoxR>
        </ListGroupItem>
      </ListGroup>
    </Card>
    <Card bg='dark' style={{ margin: '5rem' }}>
      <Card.Body>
        <Card.Title>Chirurgia ogólna</Card.Title>
      </Card.Body>
      <ListGroup variant="flush" bg='dark'>
        <ListGroupItem variant="dark">
          <BoxL>Konsultacje</BoxL>
          <BoxR>150 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Zabieg</BoxL>
          <BoxR>500 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Wypisanie recepty</BoxL>
          <BoxR>50 zł</BoxR>
        </ListGroupItem>
      </ListGroup>
    </Card>
    <Card bg='dark' style={{ margin: '5rem' }}>
      <Card.Body>
        <Card.Title>Dermatologia</Card.Title>
      </Card.Body>
      <ListGroup variant="flush" bg='dark'>
        <ListGroupItem variant="dark">
          <BoxL>Konsultacje</BoxL>
          <BoxR>120 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Zabieg</BoxL>
          <BoxR>300 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Wypisanie recepty</BoxL>
          <BoxR>50 zł</BoxR>
        </ListGroupItem>
      </ListGroup>
    </Card>
    <Card bg='dark' style={{ margin: '5rem' }}>
      <Card.Body>
        <Card.Title>Neurologia</Card.Title>
      </Card.Body>
      <ListGroup variant="flush" bg='dark'>
        <ListGroupItem variant="dark">
          <BoxL>Konsultacje</BoxL>
          <BoxR>140 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Zabieg</BoxL>
          <BoxR>400 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Wypisanie recepty</BoxL>
          <BoxR>70 zł</BoxR>
        </ListGroupItem>
      </ListGroup>
    </Card>
    <Card bg='dark' style={{ margin: '5rem' }}>
      <Card.Body>
        <Card.Title>Okulistyka</Card.Title>
      </Card.Body>
      <ListGroup variant="flush" bg='dark'>
        <ListGroupItem variant="dark">
          <BoxL>Konsultacje</BoxL>
          <BoxR>100 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Zabieg</BoxL>
          <BoxR>1200 zł</BoxR>
        </ListGroupItem>
        <ListGroupItem variant="dark">
          <BoxL>Wypisanie recepty</BoxL>
          <BoxR>50 zł</BoxR>
        </ListGroupItem>
      </ListGroup>
    </Card>

  </div>
)

export default PriceList;
