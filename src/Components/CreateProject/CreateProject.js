import React, { useState } from 'react';
import Axios from 'axios';

const CreateProject = ({ history }) => {
	const [formState, setFormState] = useState({
		name: '',
		language_used: '',
		project_name: '',
		project_description: '',
		project_url: '',
		project_photo: '',
		portfolio_url: '',
	});
	const handleChange = (event) => {
		event.persist();
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event) => {
        event.preventDefault();
		const token = localStorage.getItem('token')
		const data = new FormData(event.target)
		Axios({
			url: 'https://put-us-on-backend.herokuapp.com/project_submissions/',
			method: 'POST',
            data,
            headers: {
                'Authorization': `Token ${token}` 
            }
		}).then((res) => {
			history.push('/user');
		});
	};
	return (
		<div className='sign-up-box'>
			<h2>Create a project</h2>
			<form encType='multipart/form-data' onSubmit={handleSubmit}>
				<label>Name:</label>
				<input
					type='text'
					name='name'
					id='name'
					onChange={handleChange}
					value={formState.name}
				/>
				<label>Language used:</label>
				<input
					name='language_used'
					id='language_used'
					type='text'
					onChange={handleChange}
					value={formState.language_used}
				/>
				<label>Project name:</label>
				<input
					type='text'
					name='project_name'
					id='project_name'
					onChange={handleChange}
					value={formState.project_name}
				/>
				<label>Project description:</label>
				<input
					type='text'
					name='project_description'
					id='project_description'
					onChange={handleChange}
					value={formState.project_description}
				/>
				<label>Project photo:</label>
				<input
					type='file'
					name='project_photo'
					id='project_photo'
				/>
				<label>Project url:</label>
				<input
					type='text'
					name='project_url'
					id='project_url'
					onChange={handleChange}
					value={formState.project_url}
				/>
				{/* <label>Project photo:</label>
				<input
					type='text'
					name='project_photo'
					id='project_photo'
					onChange={handleChange}
					value={formState.project_photo}
				/> */}
				<label>Portfolio url:</label>
				<input
					type='text'
					name='portfolio_url'
					id='portfolio_url'
					onChange={handleChange}
					value={formState.portfolio_url}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default CreateProject;
