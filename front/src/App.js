import React, { Component } from 'react';
import './App.css';
// import Navbar from './containers/Navbar'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import PriceList from './PriceList'
import Offer from './Offer'
import Contact from './Contact'
import NoMatch from './NoMatch'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'
import NavigationBarLogged from './components/NavigationBarLogged'
import NavigationBarReception from './components/NavigationBarReception'
import NavigationBarDoctor from './components/NavigationBarDoctor'
import Login from './containers/Login';
import Account from './Account';
import Visits from './Visits';
import SetVisit from './SetVisit';
import Profile from './Profile';
import Prescriptions from './Prescriptions';
import Referrals from './Referrals';
import Patients from './Patients';
import EditPatient from './EditPatient';
import CalendarReception from './CalendarReception';
import CalendarDoctor from './CalendarDoctor';
// import { instanceOf } from "prop-types";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const Container = styled.div`
  // width:100vw;
  // height:100vw;

  .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background: #12736C !important;
    color: white !important;
    font-size: 1em !important;
    // margin-left: 1em !important;
    padding: 0.25em 1em !important;
    border: 2px solid #12736C !important;
    border-radius: 3px !important;
    transition: 0.5s all ease-out !important;}

    .btn-primary:hover {
    background: #4da29a !important;
    color: white !important;
    font-size: 1em !important;
    // margin-left: 1em !important;
    padding: 0.25em 1em !important;
    border: 2px solid #4da29a !important;
    border-radius: 3px;  !important}
`

class App extends Component {

  state = {
    isLogged: false
  }

  getIsLogged = function () {
    console.log(cookies.get('isLogged'));
    return cookies.get('isLogged');
  }

  checkIfLogged = function () {
    console.log("App ciacho z ciach:" + cookies.get('isLogged'));
    if (cookies.get('isLogged') === "true") {
      return true;
    } else {
      return false;
    }
  }

  getNavBar({
    // tutaj destrukturyzujemy obiekt
    // jako parametr funkcji przyjmujemy historię
    // i później przekazujemy ją jako właściwość do NavigationBarów
    history
  }) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    return (
      <div>
        {(function () {
          if (userData === null) {
            return <NavigationBar userData={userData} history={history} />;
          } else {
            switch (userData.role) {
              case 'doctor':
                return <NavigationBarDoctor userData={userData} history={history} />;
              case 'reception':
                return <NavigationBarReception userData={userData} history={history} />;
              case 'user':
                return <NavigationBarLogged userData={userData} history={history} />;
              default:
                return <NavigationBar userData={userData} history={history} />;
            }
          }
        })()}
      </div>
    );
  }

  render() {
    // getNavBar zostało zamknięte w Route
    // dzięki temu przekazywana jest mu właściwość "history" i później mozemy z niej korzystać

    return (
      <Container>
        <React.Fragment>
          <Router>
            <Route component={this.getNavBar} />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/priceList" component={PriceList} />
                <Route path="/offer" component={Offer} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/visits" component={Visits} />
                <Route path="/account" component={Account} />
                <Route path="/setvisit" component={SetVisit} />
                <Route path="/profile" component={Profile} />
                <Route path="/prescriptions" component={Prescriptions} />
                <Route path="/referrals" component={Referrals} />
                <Route path="/patients" component={Patients} />
                <Route path="/editPatient" component={EditPatient} />
                <Route path="/calendarReception" component={CalendarReception} />
                <Route path="/calendarDoctor" component={CalendarDoctor} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
      </Container>
    );
  }
}

export default App;
