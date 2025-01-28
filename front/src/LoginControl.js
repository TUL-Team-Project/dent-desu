import React from 'react';
import NavigationBar from './components/NavigationBar'
import NavigationBarLogged from './components/NavigationBar'

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.state = { isLogged: false }
  }

  handleLoginChange(e) {
    this.setState({ isLogged: e.target.value });
  }

  render() {
    const isLogged = this.state.isLogged;
    // let button;
    // if (isLoggedIn) {      button = <LogoutButton onClick={this.handleLogoutClick} />;    } else {      button = <LoginButton onClick={this.handleLoginClick} />;    }
    return (
      <div>
        {isLogged ? <NavigationBarLogged /> : <NavigationBar />}
      </div>
    );
  }
}

export default LoginControl;