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
        <div className="sign-up-box">
            
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label>
                    Email:
                </label>
                    <input type="text" name="email" id="email" onChange={handleChange} value={formState.email}/>
                <label>
                    Password:
                </label>
                    <input name="password" id="password" type="password" onChange={handleChange} value={formState.password}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default LogIn;



// import { Redirect } from 'react-router-dom';
// const Login = ({ setToken, setUser }) => {
// 	const signin = {
// 		email: '',
// 		password: '',
// 	};
// 	const [redirect, setRedirect] = useState(false);
// 	const [formState, setFormState] = useState(signin);
// 	const handleChange = (event) => {
// 		setFormState({ ...formState, [event.target.id]: event.target.value });
// 	};
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		setFormState(signin);
// 		Axios({
// 			url: `${APIURL}api/users/signin`,
// 			method: 'POST',
// 			data: formState,
// 		}).then((res) => {
// 			console.log(res);
// 			setToken(res.data.token);
// 			setUser(res.data.user);
// 			setRedirect(true);
// 		});
// 	};
// 	if (redirect) {
// 		return <Redirect to='/' />;
// 	}
// 	return (
// 		<div>
// 			<p className='login-message'>Please enter your credentials.</p>
// 			<form onSubmit={handleSubmit} className='auth-body'>
// 				<label htmlFor='email'>Email Address: </label>
// 				<div className='form-component'>
// 					<input
// 						required
// 						onChange={handleChange}
// 						type='email'
// 						name='email'
// 						id='email'
// 						placeholder='valid email address'
// 						value={formState.email}
// 					/>
// 				</div>
// 				<br />
// 				<label htmlFor='password'>Password: </label>
// 				<div className='form-component'>
// 					<input
// 						required
// 						onChange={handleChange}
// 						type='password'
// 						name='password'
// 						id='password'
// 						placeholder='enter password'
// 						value={formState.password}
// 					/>
// 				</div>
// 				<br />
// 				<button id='button' type='submit' className='pretty-button'>
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// };
// export default Login;