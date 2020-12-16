import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <div className= 'App'>
           <h2>Recently Created:</h2>
           <Link to='/projects'>More Projects</Link>
           </div>
        </div>
    );
};

export default Home;