import React, { Component } from 'react';

import moment from 'moment';
import {
  Calendar,
  momentLocalizer,
  Views
} from 'react-big-calendar';
import { Dropdown, FormControl } from "react-bootstrap";
import styled from 'styled-components';
import { CalendarContainer } from './Calendar/Calendar.styled';
import { APIS } from './config';
import { authHeader } from './helpers';

moment.locale('pl');

const title = "Kalendarz";
const sub_view = "Widok";
const sub_calendar = "Kalendarz";

const localizer = momentLocalizer(moment);

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

class CustomEvent extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      viewType: 'Ogólny',
      doctorName: '',
      doctorSpeciality: '',
      visibility: 'hidden',
      appointments: [],
      patientsList: props.patients,
      title: props.title
    }
  }

  render() {
    return (
      <div>
        {/* <div>{'Lekarz: ' } {userData.name} {userData.surname}</div> */}
        {/* <div>{'Typ wizyty: Zwykła wizyta'}</div> */}
        {this.props.title}
      </div>
    );
  }
}

let calComponents = {
  // event: MyEvent, // used by each view (Month, Day, Week)
  // toolbar: MyToolbar,
  // agenda: {
  //       event: MyAgendaEvent // with the agenda view use a different component to render events
  // }
  event: CustomEvent,
  backgroundColor: 'lightblue',
}

class CalendarReception extends Component {

  state = {
    doctors: [],
    appointments: [],
    chosenDoctor: null,
    viewType: 'Ogólny',
    doctorName: '',
    doctorSpeciality: '',
    visibility: 'hidden',
    myPatients: []
  }

  handleTypeChange(type) {
    if (type === 'Ogólny') {
      this.setState({ viewType: type, visibility: 'hidden' });
    } else {
      this.setState({ viewType: type, visibility: '' });
    }
  }

  componentDidMount() {
    this.getDoctors();
  }

  handleDocChange(doctor) {
    this.setState({ chosenDoctor: doctor }, () => this.getDoctorAppointments(doctor.doctorID));
  }

  getDoctors() {
    return fetch(APIS.getDoctors)
      .then(response => response.json())
      .then(doctors => this.setState({ doctors }))
      .catch(error => console.log('error', error));
  }

  getPatientName(id){
    // aaaaaa wrrrrr (O>.<O)S
  }

  getDoctorAppointments(id) {
    return fetch(APIS.reception.allDoctorAppointments + id, authHeader())
      .then(response => response.json())
      .then(appointments => {
        const events = appointments.map((appointment, index) => {
          const startDate = new Date(appointment.dateTime);
          const patient = 'Pacjent: ' + appointment.userId //+ ' ' + this.getPatientName(appointment.userId);
          return {
            id: index,
            start: startDate,
            title: patient,
            end: new Date(startDate.getTime() + 0.5 * 3600000) // 30min
          }
        });
        return events;
      })
      .then(appointments => this.setState({ appointments }))
      .catch(error => console.log('error', error));
  }

  render() {
    const docData = this.doctorsList;
    const chosenDocData = this.state.doctorName + " " + this.state.doctorSpeciality + " ";
    const typeData = this.typesList;
    const chosenType = this.state.viewType;

    return (
      <div>
        <Title>{title}</Title>
        <Subtitle>{sub_view}</Subtitle>
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
        <Subtitle style={{ marginBottom: '3rem' }}>{sub_calendar}</Subtitle>
        <CalendarContainer>
          <Calendar
            localizer={localizer}
            defaultView={Views.WEEK}
            // defaultDate = {new Date(2020,9,14)}
            selectable
            views={{ week: true }}
            events={this.state.appointments}
            startAccessor="start"
            endAccessor="end"
            style={{ marginLeft: '5%', marginRight: '5%', height: 1200, }}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
            components={calComponents}
            />
          </CalendarContainer>
      </div>
    )
  }
}

export default CalendarReception;
