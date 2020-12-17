import React, { useState } from 'react';
import Axios from 'axios';
import './LogIn.css';

const LogIn = ({ setLogIn }) => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })
    const handleChange = (event) => {
        event.persist()
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    const handleSubmit = (event) => {
         event.preventDefault()
         Axios({
            url: 'http://localhost:8000/token/login',
            method: 'POST',
            data: formState,   
         }).then((res) => {
         console.log(res)
         localStorage.setItem('token', res.data.auth_token)
         setLogIn(true)
         })
    }
    return (
			<div className='sign-up-box'>
				<form onSubmit={handleSubmit}>
					<h1>Log In</h1>
					<label>Email:</label>
					<input
						type='text'
						name='email'
						id='email'
						onChange={handleChange}
						value={formState.email}
					/>
					<label>Password:</label>
					<input
						name='password'
						id='password'
						type='password'
						onChange={handleChange}
						value={formState.password}
					/>
					<button type='submit'>
						Submit
					</button>
					<button type='click'>
						Cancel
					</button>
                    <p>Don't have an account?&nbsp;
                        <a href='/signup'>Sign Up</a>
                    </p>
				</form>
			</div>
		);
};

export default LogIn;
