import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './SearchBar.css';

const SearchBar = () => {
    const [searchProject, setSearchProject] = useState('');
    const [projects, setProjects] = useState([])
	useEffect(() => {
		Axios({
			url: 'https://put-us-on-backend.herokuapp.com/project_submissions',
			method: 'GET',
		}).then((res) => {
			setProjects(res.data)
		});
	}, []);

	return (
		<div className='Search'>
			<h1>Search</h1>
			<input
				type='text'
				placeholder='Search...'
				onChange={(event) => {
					setSearchProject(event.target.value);
				}}
			/>

			{projects.filter((data) => {
				if (searchProject === '') {
					return data;
				} else if (
					data.language_used.toLowerCase().includes(searchProject.toLowerCase())
				) {
					return data;
				}
			}).map((data, key) => {
				return (
					<div className='results' key={key}>
						<p>{data.language_used}</p>
					</div>
				);
			})}
		</div>
	);
};

export default SearchBar;
