import React, { useState, useEffect } from 'react';
import Results from '../Results/Results';
// import Axios from 'axios';

const SearchBar = () => {
    // const [filteredResults, setFilteredResults] = useState([]);
    const [projectResult, setProjectResult] = useState([]);

    const url = 'http://localhost:8000/project_submissions/';
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson);
            setProjectResult(resJson.results);
        })
        .catch(console.error);

    }, []);
    const handleSubmit = (event) => {
			event.preventDefault();
			console.log(event.target[0].value);
        };
     
    return (
			<div>
				<br></br>
				<br></br>
				<form onSubmit={handleSubmit}>
					<label htmlFor='searchBar'>
						<input id='searchBar'/>
						<input className='filter' type='submit' value='Search' />
					</label>
				</form>
                {/* <Results projectResult={projectResult} filteredResults={filteredResults}/> */}
			</div>
        ); 
    }
    
    export default SearchBar