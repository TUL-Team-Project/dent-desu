import React from 'react'
import { Carousel, Button } from "react-bootstrap";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Styles = styled.div`
  // .carousel {
  //   width:100vw;
  //   height:100%;
  // }
  .carousel-inner {
    height: 100%;
  }
  
  .item {
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  
  .item img {
    visibility: visible;
  }

  .carousel-caption {
    color: white;
    top: 30%;
    text-align: center;
    // right: 40%;
    // left: auto;
    // max-width: 1200px;
  }

  .non-prod-alert {
    width: 50%;
    margin: 300px auto 0 auto;
    text-align: center;
  }

  .home-landing-btn {
    margin-top: 20px;
  }`

export const Home = () => (
  <Styles className="mw-100">
    <Carousel fade="true" controls="false">

      <Carousel.Item>
        <img
          src={require('./assets/tlo1_c.jpg')}
          alt="1"
        />
        <Carousel.Caption>
          <h3>Bogata oferta usług specjalistycznych</h3>
          <Link to="/offer" className="btn btn-primary home-landing-btn">Zapoznaj się z naszą ofertą</Link>
          <Alert variant='danger' className="non-prod-alert">
            UWAGA, STRONA TESTOWA. Dane na tej stronie są danymi przykładowymi!
          </Alert>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={require('./assets/tlo2_c.jpg')}
          alt="2"
        />
        <Carousel.Caption>
          <h3>Szeroki zakres specjalności i usług diagnostyczno-leczniczych</h3>
          <Link to="/about" className="btn btn-primary home-landing-btn">Poznaj nasz zespół</Link>
          <Alert variant='danger' className="non-prod-alert">
            UWAGA, STRONA TESTOWA. Dane na tej stronie są danymi przykładowymi!
          </Alert>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={require('./assets/tlo3_c.jpg')}
          alt="3"
        />
        <Carousel.Caption>
          <h3>Nowoczesna klinika w sercu miasta</h3>
          <Link to="/contact" className="btn btn-primary home-landing-btn">Skontaktuj się z nami</Link>
          <Alert variant='danger' className="non-prod-alert">
            UWAGA, STRONA TESTOWA. Dane na tej stronie są danymi przykładowymi!
          </Alert>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={require('./assets/tlo4_c.jpg')}
          alt="4"
        />
        <Carousel.Caption>
          <h3>Skorzystaj z ulg dla stałego klienta</h3>
          <Link to="/priceList" className="btn btn-primary home-landing-btn">Zapoznaj sie z cennikiem usług</Link>
          <Alert variant='danger' className="non-prod-alert">
            UWAGA, STRONA TESTOWA. Dane na tej stronie są danymi przykładowymi!
          </Alert>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Styles>
)

export default Home;
