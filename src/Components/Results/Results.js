import React from 'react';

const Results = () => {
    return (
        <div>
            
        </div>
    );
};

export default Results;





















// import React from 'react';
// import { Link } from 'react-router-dom';

// const Results = ({ projectResult, filteredResults }) => {
//     const resultsToDisplay = filteredResults.length === 0 ? projectResult : filteredResults
//     return (
//         <div>
//             <h1 className="projects">Projects</h1>
//             { resultsToDisplay.map((project_submission) => {
//                 console.log(project_submission);
//                 return <Link className="results"to={`/users/${project_submission.project_name}`} style={{textDecoration: 'none'}} key = {project_submission.project_name}>
//                     <h2 key={project_submission.project_name}>{project_submission.project_name}</h2>
//                 </Link>
//             })}
//             </div>
//             )

//             }

// export default Results;