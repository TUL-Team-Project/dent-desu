import moment from 'moment';
import React, { Component } from 'react';
import {
  Calendar,
  momentLocalizer,
  Views,
} from 'react-big-calendar';
import styled from 'styled-components';
import { CalendarContainer } from './Calendar/Calendar.styled';
import "./calendarStyle.scss";
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

class CalendarDoctor extends Component {
  state = {
    viewType: 'Ogólny',
    doctorName: '',
    doctorSpeciality: '',
    visibility: 'hidden',
    appointments: [],
    myPatients: []
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let docId = userData.doctorID;
    //console.log(docId);
    this.getPatients(docId);
    //this.getDoctorAppointments(docId);
  }

  getPatientName(id){
    // aaaaaa wrrrrr (O>.<O)S
  }

  getDoctorAppointments(id) {
    return fetch(APIS.doctor.allMyAppointments + id, authHeader())
      .then(response => response.json())
      .then(appointments => {
        const events = appointments.map((appointment, index) => {
          const startDate = new Date(appointment.dateTime);
          const patient = 'Pacjent: ' + appointment.userId // + ' ' + this.getPatientName(appointment.userId);
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

  getPatients(id) {
    fetch(APIS.doctor.getMyUsers + id, authHeader())
      .then(response => response.json())
      .then(myPatients => {
        const patients = myPatients.map((patient, index) => {
          const patientName = 'Pacjent: ' + patient.name + patient.surname;
          return {
            id: index,
            title: patientName
          }
        });
        return patients;
      })
      .then(myPatients => this.setState({ myPatients }), this.getDoctorAppointments(id))
      .catch(error => console.log('error', error));
  }

  render() {

    return (
      <div>
        <Title>{title}</Title>
        <CalendarContainer>
          <Calendar
            localizer={localizer}
            defaultView={Views.WEEK}
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

export default CalendarDoctor;
