import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <React.Fragment>
        <Notifications />
        <div className='App'>
          <Header />
          {isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
