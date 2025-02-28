import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import styled from 'styled-components';
import { APIS } from './config';

const title = "Nasi specjaliści";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-top: 4em;
  // margin-left: 20%;
  margin-bottom: 2em;
`;

const docPub = 'images/doctors/'

class DoctorCard extends Component {

  render() {

    return (
      <Card bg='dark'>
        <Card.Img variant="top" src={docPub + this.props.avatarPath} />
        <Card.Body>
          <Card.Title>{this.props.name} {this.props.surname}</Card.Title>
          <Card.Text>{this.props.specialization}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

class DoctorsList extends Component {
  render() {
    return (
      <div>{
        this.props.doctorData.map((doctorData, doctorID) => {
          return (
            <DoctorCard
              doctorID={doctorData.doctorID}
              name={doctorData.name}
              surname={doctorData.surname}
              specialization={doctorData.specialization}
              avatarPath={doctorData.avatarPath}
            />
          )
        })
      }
      </div>
    )
  }
}


class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    };
  }

  componentDidMount() {
    fetch(APIS.getDoctors)
      .then(response => response.json())
      .then(json => this.setState({ doctors: json }));
  }

  render() {

    return (
      <div>
        <Title>{title}</Title>
        <Card style={{ margin: '3rem' }}>
          <DoctorsList doctorData={this.state.doctors} />
        </Card>
      </div>
    )
  }
}

export default About;
