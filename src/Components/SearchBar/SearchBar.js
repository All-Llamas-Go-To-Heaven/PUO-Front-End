import React, { useState, useEffect } from 'react';
import Results from '../Results/Results';
import Axios from 'axios';
import DataJson from '../../data.json';
import './SearchBar.css';

const SearchBar = () => {
const [searchProject, setSearchProject] = useState('')
    useEffect(() => { 
         Axios({
            url: 'http://localhost:8000/project_submissions',
            method: 'GET',
        }).then((res) => {
            console.log(res);
        });
     
    }, [])
     
    return (
			<div className="Search">
			<h1>Search</h1>
                        <input type="text" placeholder="Search..." onChange={event => {setSearchProject(event.target.value)
                        }}/>

					    {DataJson.filter((data) => {
                            if (searchProject == "") {
                                return data
                            } else if (data.first_name.toLowerCase().includes(searchProject.toLowerCase())){
                                return data
                            }
                        }).map((data, key) => {

                            return (
                                <div className="results" key={key}> 
                                <p>{data.first_name}</p>
                                </div>);
                        })}
            </div>       
        ); 
    }
    
    export default SearchBar