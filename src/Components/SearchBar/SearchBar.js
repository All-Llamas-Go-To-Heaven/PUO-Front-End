import React, { useState, useEffect } from 'react';
import Results from '../Results/Results';
import Axios from 'axios';

const SearchBar = () => {
    // const [filteredResults, setFilteredResults] = useState([]);
    const [projectResult, setProjectResult] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
           
        };
    
    useEffect(() => { 
         Axios({
            url: 'http://localhost:8000/project_submissions',
            method: 'GET',
        }).then((res) => {
            console.log(res);
        });
     
    }, [])
     
    return (
			<div>
				<br></br>
				<br></br>
				{/* <form onSubmit={handleSubmit}> */}
					<label htmlFor='searchBar'>
						<input id='searchBar'/>
						{/* <input className='search-bar' type='submit' value='Search' /> */}
					</label>
				{/* </form> */}
                {/* <Results projectResult={projectResult} filteredResults={filteredResults}/> */}
			</div>
        ); 
    }
    
    export default SearchBar