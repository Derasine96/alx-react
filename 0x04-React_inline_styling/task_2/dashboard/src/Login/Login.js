import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const loginStyles = StyleSheet.create({
	'App-body': {
		fontSize: '1rem',
		padding: '1.5em',
		height: '45%',
        paddingTop: '0',
	},

	'form-inputs': {
		display: 'flex',
		gap: '5em',
		alignItems: 'center',
	},

	input: {
		height: '1.4rem',
		marginLeft: '10px',
	},
});

const Login = () => {
    return (
        <React.Fragment>
            <div className={css(loginStyles['App-body'])}>
                <p>Login to access the full dashboard</p>
                <form className={css(loginStyles['form-nputs'])}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className={css(loginStyles.input)} /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className={css(loginStyles.input)} /><br />
                    <button type="button">OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Login;