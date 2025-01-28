import React from 'react'
import styled from 'styled-components';
import { CardColumns, Card, ListGroup, ListGroupItem, Button, Alert } from "react-bootstrap";

const title = "Oferta";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-top: 4em;
  // margin-left: 20%;
  margin-bottom: 2em;
`;

export const Offer = () => (
  <div>
    <Title>{title}</Title>
    <Card bg='dark' style={{ margin: '5rem' }}>
      <Card.Header>Promocje</Card.Header>
      <Card.Body>
        <Card.Title>Promocja rodzinna</Card.Title>
        <Card.Text>
          Zrób badania krwi dla 2 dorosłych i 1 dziecka, a drugie dziecko otrzymasz gratis!
        </Card.Text>
      </Card.Body>
    </Card>
    <Card bg='dark' style={{ margin: '5rem' }}>
      <Card.Header>Nowa usługa</Card.Header>
      <Card.Body>
        <Card.Title>Lekarz z dowozem</Card.Title>
        <Card.Text>
          Nie możesz przyjść do lekarza? Lekarz przyjedzie do Ciebie!
        </Card.Text>
      </Card.Body>
      <Card.Footer>Uwaga dodatkowa opłata za koronafartuch, koronamaseczkę i koronarękawiczki.</Card.Footer>
    </Card>

  </div>
)

export default Offer;
