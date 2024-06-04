import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const appStyles = StyleSheet.create({
	App: {
		height: '100vh',
		maxWidth: '100vw',
	},
	'heading-section': {
		borderBottom: '4px solid red',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row-reverse',
	},
	'App-footer': {
		borderTop: '4px solid red',
		fontSize: '1.4rem',
		padding: '0.5em',
		textAlign: 'center',
		fontStyle: 'italic',
	},
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  handleKeyPress(keys) {
    if (keys.ctrlKey && keys.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(appStyles.App)}>
          <div className={css(appStyles['heading-section'])}>
            <Notifications listNotifications={this.listNotifications} />
            <Header />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Registration is now underway!</p>
          </BodySection>
          <Footer className={css(appStyles['App-footer'])} />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;