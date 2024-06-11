import React from 'react';
import holbertonlogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const headerStyles = StyleSheet.create({
	AppHeader: {
		fontSize: '1.4rem',
		color: 'red',
		display: 'flex',
		alignItems: 'center',
		padding: '1.2em',
	},

	img: {
		width: '250px',
		height: '250px',
	},
	greeting: {
		marginTop: '1rem',
	},
	logout: {
		cursor: 'pointer',
	},
	title: {
		color: 'red',
	},
});

class Header extends React.Component {
	render() {
		const data = this.context;
		return (
			<React.Fragment>
				<div className={css(headerStyles.AppHeader)}>
					<img src={holbertonlogo} className={css(headerStyles.img)} alt='logo' />
					<h1 className={css(styles.title)}>School dashboard</h1>
				</div>
				{data.user.isLoggedIn && (
					<div className={css(styles.greeting)} id='logoutSection'>
						Welcome {data.user.email}{' '}
						<a className={css(styles.logout)} onClick={data.logOut}>
							(logout)
						</a>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Header.contextType = AppContext;

export default Header;