import React, { useState } from 'react';
import Axios from 'axios';
// import { Redirect } from 'react-router-dom';


const SignUp = () => {
  const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    })
    const handleChange = (event) => {
        event.persist()
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    const handleSubmit = (event) => {
         event.preventDefault()
         Axios({
            url: 'http://localhost:8000/users/',
            method: 'POST',
			data: formState, 
			headers: {
				"Accept": "application/json", 
				"Content-Type": "application/json"
			}  
         }).then((res) => {
         console.log(res)
        //  localStorage.setItem('token', res.data.auth_token)
        //  setLogIn(true)
         })
    }
    return (
			<div className='sign-up-box'>
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<label>Username:</label>
					<input
						type='text'
						name='username'
						id='username'
						onChange={handleChange}
						value={formState.username}
					/>
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
					<label>Re-Enter Password:</label>
					<input
						name='re_password'
						id='re_password'
						type='password'
						onChange={handleChange}
						value={formState.re_password}
					/>
					<button type='submit'>Submit</button>
					<button type='click'>Cancel</button>
				</form>
			</div>
		);
};


export default SignUp;
