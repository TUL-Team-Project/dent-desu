import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const title = "Kontakt";
const name = "PlusMed Sp. z o.o.";
const street = "ul. Medyczna 82/84";
const city = "95-100 Zgierz";
const NIP = "NIP: 700-00-00-000";
const phone = "+48 42 700 11 22";
const mobile = "+48 555 000 555";
const email = "info@plusmed.cloud";

const Title = styled.h1`
  font-size: 2em;
  text-align: left;
  margin-top: 4em;
  // margin-left: 20%;
  margin-bottom: 2em;
`;

const Block = styled.div`
  font-size: 1em;
  margin-left: 20%;
  margin-top: 3em;
  margin-bottom: 2em;
`

const BoxL = styled.div`
  font-size: 1em;
  margin-left: 25%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom: 2em;
  float: left;
  align: center;
  width: 300px;
`

const BoxR = styled.div`
  font-size: 1em;
  margin-right: 20%;
  margin-left: 5%;
  margin-top: 9%;
  margin-bottom: 2em;
  float: right;  
  align: center;
`

const CustomAlert = styled.div`
  .non-prod-alert {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }`

export const Contact = () => (
  <div>
    <Container>
      <Title>{title}</Title>
      <Row>
        <Col>
          <CustomAlert>
            <Alert variant='danger' className="non-prod-alert">
              UWAGA, STRONA TESTOWA. Dane na tej stronie są danymi przykładowymi!
            </Alert>
          </CustomAlert>
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}>
        <Col style={{ marginTop: "30px" }}>
          <p>
            {name}<br />
            {street}<br />
            {city}
          </p>
          <p>
            {NIP}
          </p>
          <p>
            tel./fax:<br />
            {phone}<br />
            {mobile}
          </p>
          <p>
            {email}
          </p>
        </Col>
        <Col>
          <a href="https://goo.gl/maps/rmV27Hfez4CfqMip6" target="_blank" rel="noopener noreferrer">
            <img src={require('./assets/map.PNG')} alt="map"></img>
          </a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Contact;
