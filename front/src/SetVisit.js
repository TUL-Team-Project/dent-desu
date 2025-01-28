import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown, FormControl, Modal, setShow, Button } from "react-bootstrap";
import { APIS } from './config';
import { authHeader } from './helpers';

import {
  Calendar,
  momentLocalizer,
  Views
} from 'react-big-calendar'

import moment from 'moment';
import 'moment/locale/pl';
const localizer = momentLocalizer(moment);

const title = "Umów wizytę";
const sub_doctor = "Lekarz";
const sub_calendar = "Kalendarz";



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

const DocName = styled.h1`
  font-size: 1em;
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

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = React.useState('');

    // todo wyszukiwarka do poprawy - wyszukiwanie po bazie?

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy} >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Szukaj..."
          onChange={(e) => setValue(e.target.value)}
          value={value} />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value))} </ul>
      </div>
    );
  },
);

class SetVisit extends Component {
  state = {
    doctors: [],
    appointments: null,
    chosenDoctor: null
  }

  handleDocChange(doctor) {
    this.setState({ chosenDoctor: doctor });
    this.getDoctorAppointments(doctor.doctorID);
  }

  getDoctors() {
    return fetch(APIS.getDoctors)
      .then(response => response.json())
      .then(doctors => this.setState({ doctors }))
      .catch(error => console.log('error', error));
  }

  getDoctorAppointments(id) {
    return fetch(APIS.user.allDoctorAppointments + id, authHeader())
      .then(response => response.json())
      .then(appointments => {
        const events = appointments.map((appointment, index) => {
          const startDate = new Date(appointment.dateTime);
          return {
            id: index,
            start: startDate,
            title: 'Wizyta',
            end: new Date(startDate.getTime() + 0.5 * 3600000) // 30min
          }
        });
        return events;
      })
      .then(appointments => this.setState({ appointments }))
      .catch(error => console.log('error', error));
  }

  componentDidMount() {
    this.getDoctors();
  }

  render() {
    return (
      <div>
        <Title>{title}</Title>
        <Subtitle>{sub_doctor}</Subtitle>
        <Dropdown style={{ marginLeft: '5%', marginTop: '1rem' }}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic" >
            {(this.state.chosenDoctor) ? `${this.state.chosenDoctor.name} ${this.state.chosenDoctor.surname}` : "Wybierz lekarza "}
          </Dropdown.Toggle>
          <Dropdown.Menu as={CustomMenu}>
            { this.state.doctors.map(doctor => ( 
              <Dropdown.Item 
                onClick={() => this.handleDocChange(doctor)}>
                  {doctor.name} {doctor.surname} - {doctor.specialization}</Dropdown.Item>
              ))
            }
           </Dropdown.Menu>
        </Dropdown>
        <DoctorCalendar 
          refresh={() => this.getDoctorAppointments(this.state.chosenDoctor.doctorID)}
          doctor={this.state.chosenDoctor} 
          events={this.state.appointments}/>
      </div>
    )
  }
}

function BookingModal({
  showModal,
  handleCloseModal,
  currentSelection,
  doctor,
  hideModal
}) {
  const [show, setShow] = useState(showModal); // react setState hook
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    setShow(showModal);
    if(currentSelection) {
      moment.locale('pl');
      setStartDate(moment(currentSelection).format('D MMMM YYYY, H:mm'));
    }
  }, [showModal]);


  return (
    <>
      <Modal style={{color: '#000'}} show={show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nowa wizyta u {doctor.name} {doctor.surname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Start: { startDate }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Umów się
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


class DoctorCalendar extends Component {
  state = {
    showModal: false,
    currentSelection: null
  }

  setAppointment() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    return fetch(APIS.user.bookAppointment, authHeader('POST', {
      dateTime: this.state.currentSelection.toISOString(),
      price: 100,
      type: 15,
      diagnosis: "",
      recommendations: "",
      userId: userData.userID,
      doctorId: this.props.doctor.doctorID
    }))
    .catch(error => console.log('error', error));
  }

  handleCloseModal() {
    this.setAppointment()
     .then(() => {
      this.props.refresh();
      this.setState({showModal: false, currentSelection: null});
     });
  }

  hideModal() {
    this.setState({showModal: false, currentSelection: null});
  }
  
  handleSelect(event) { // event - zmienna od kalendarza
    this.setState({showModal: true});
    this.setState({currentSelection: event.start });
  }
  
  render() {
    if(!this.props.doctor || !this.props.events) { 
      return null
    };
 
    return (
      <div>
        <BookingModal
          currentSelection={this.state.currentSelection}
          doctor={this.props.doctor}
          showModal={this.state.showModal && this.state.currentSelection } 
          handleCloseModal={() => this.handleCloseModal()} 
          hideModal={() => this.hideModal()}
          />

        <Subtitle>{sub_calendar}</Subtitle>

        <Calendar 
          localizer={localizer}
          events={this.props.events}
          startAccessor="start"
          endAccessor="end"
          defaultView={Views.WEEK}
          views={{ week: true }}
          selectable
          onSelectSlot={this.handleSelect.bind(this)}
        />
      </div>
    )
  }
}

// todo: dodać kalendarz np:
// https://reactjsexample.com/a-scheduler-and-resource-planning-component-built-for-react/


export default SetVisit;
