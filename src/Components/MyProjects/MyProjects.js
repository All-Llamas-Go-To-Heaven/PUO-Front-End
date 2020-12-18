import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const MyProjects = () => {
const [projects, setProjects] = useState([])
const token = localStorage.getItem('token')
const [refresh, setRefresh] = useState(true)
useEffect(() => {
   if(refresh){
       Axios({
			method: 'get',
			url: 'https://put-us-on-backend.herokuapp.com/project_submissions/',
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then(({data: projects}) => {
          setProjects(projects)
          setRefresh(false)
        }).catch(console.error); 
   }
}, [refresh])
function handleDelete(id) {
    Axios({
			method: 'delete',
			url: 'https://put-us-on-backend.herokuapp.com/project_submissions/' + id + '/',
			headers: {
				Authorization: `Token ${token}`,
			},
		})
			.then(() => {
			 setRefresh(true)
			})
			.catch(console.error);
}
    return (
        <div>
            <h2>My Projects: </h2>
            {projects.map((project) => (
                <div>
                    <h1>{project.name}</h1>
                    <button onClick={() => handleDelete(project.id)}>delete</button>
                </div>
            ))}
        </div>
    );
};

export default MyProjects;