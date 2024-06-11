import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const loginStyles = StyleSheet.create({
  'AppBody': {
    fontSize: '1.2rem',
    padding: '0',
    height: '60%',
    '@media (max-width: 900px)': {
      fontSize: '1rem',
      padding: '1.5em',
      paddingTop: '0',
      margin: '0 0 0 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      marginLeft: '-1.5rem',
    },
  },
  formInputs: {
    display: 'block',
    gap: '1em',
    alignItems: 'flex-start',
    padding: '0',
    '@media (max-width: 900px)': {
      display: 'flex',
      padding: '0',
      margin: '0',
      flexDirection: 'column',
    },
  },
  input: {
    height: '1rem',
    marginLeft: '0px',
    '@media (max-width: 900px)': {
      height: '1rem',
      marginLeft: '10px',
    },
  },
  inputRow: {
    display: 'flex',
    '@media (max-width: 900px)': {
      display: 'flex',
      padding: '0',
    },
  }
});

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.state = {
			email: '',
			password: '',
			enableSubmit: false,
		};
	}

	handleLoginSubmit(e) {
		e.preventDefault();
		this.setState({ isLoggedIn: true });
		this.props.logIn(this.state.email, this.state.password);
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
		this.state.email !== '' && this.state.password !== ''
			? this.setState({ enableSubmit: true })
			: this.setState({ enableSubmit: false });
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
		this.state.email !== '' && this.state.password !== ''
			? this.setState({ enableSubmit: true })
			: this.setState({ enableSubmit: false });
	}

	render() {
		return (
			<>
				<div className={css(loginStyles.AppBody)}>
					<h1>Log in to continue</h1>
					<p>Login to access the full dashboard</p>
					<form onSubmit={this.handleLoginSubmit}>
						<label htmlFor='email'>Email: </label>
						<input
							className={css(loginStyles.input)}
							type='email'
							id='email'
							name='email'
							onChange={this.handleChangeEmail}
							value={this.state.email}
						/>
						<label htmlFor='password'>Password: </label>
						<input
							className={css(loginStyles.input)}
							type='password'
							id='password'
							name='password'
							onChange={this.handleChangePassword}
							value={this.state.password}
						/>
						<input
							className={css(loginStyles.input)}
							type='submit'
							value='OK'
							disabled={!this.state.enableSubmit}
						/>
					</form>
				</div>
			</>
		);
	}
}

export default Login;

