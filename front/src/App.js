import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PriceList from './PriceList';
import Offer from './Offer';
import Contact from './Contact';
import NoMatch from './NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import NavigationBarLogged from './components/NavigationBarLogged';
import NavigationBarReception from './components/NavigationBarReception';
import NavigationBarDoctor from './components/NavigationBarDoctor';
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
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Container = styled.div`
  /* Your container styles here */
  .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background: #12736c !important;
    color: white !important;
    font-size: 1em !important;
    padding: 0.25em 1em !important;
    border: 2px solid #12736c !important;
    border-radius: 3px !important;
    transition: 0.5s all ease-out !important;
  }
  .btn-primary:hover {
    background: #4da29a !important;
    border: 2px solid #4da29a !important;
  }
`;

// This wrapper uses useNavigate and passes the navigate function
const NavigationWrapper = ({ children }) => {
  const navigate = useNavigate();
  return children(navigate);
};

class App extends Component {
  state = {
    isLogged: false,
  };

  // Accept a navigate function so your navigation bar components can perform navigation actions
  renderNavBar = (navigate) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData === null) {
      return <NavigationBar userData={userData} navigate={navigate} />;
    } else {
      switch (userData.role) {
        case 'doctor':
          return <NavigationBarDoctor userData={userData} navigate={navigate} />;
        case 'reception':
          return <NavigationBarReception userData={userData} navigate={navigate} />;
        case 'user':
          return <NavigationBarLogged userData={userData} navigate={navigate} />;
        default:
          return <NavigationBar userData={userData} navigate={navigate} />;
      }
    }
  };

  render() {
    return (
        <Container>
          <BrowserRouter>
            {/* Use the NavigationWrapper to pass navigate */}
            <NavigationWrapper>
              {(navigate) => this.renderNavBar(navigate)}
            </NavigationWrapper>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/priceList" element={<PriceList />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/visits" element={<Visits />} />
                <Route path="/account" element={<Account />} />
                <Route path="/setvisit" element={<SetVisit />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/prescriptions" element={<Prescriptions />} />
                <Route path="/referrals" element={<Referrals />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/editPatient" element={<EditPatient />} />
                <Route path="/calendarReception" element={<CalendarReception />} />
                <Route path="/calendarDoctor" element={<CalendarDoctor />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </Container>
    );
  }
}

export default App;
