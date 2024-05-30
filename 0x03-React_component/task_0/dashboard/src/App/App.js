
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='heading-section'>
						<Notifications listNotifications={this.listNotifications} />
						<Header />
					</div>
					{this.props.isLoggedIn ? (
						<CourseList listCourses={this.listCourses} />
					) : (
						<Login />
					)}
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;
