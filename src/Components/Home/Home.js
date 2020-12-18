import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='App'>
                <h2>Created Projects:</h2>
                <Link to='/projects'>More Projects</Link>
            </div>
        </div>
    );
};

export default Home;
// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';

// const Home = ({ token, setToken }) => {
//     let history = useHistory();
//     function logout() {
//         localStorage.clear();
//         // setToken('');
//         history.push('/login');
//     }
//     return (
//         <div>
//             <div className='App'>
//                 <h2>Recently Created:</h2>
//                 <Link to='/projects'>More Projects</Link>
//             </div>
//             <button onClick={logout}>Log Out</button>
//         </div>
//     );
// };

// export default Home;
