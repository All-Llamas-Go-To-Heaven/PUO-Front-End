import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const PortfolioDetails = () => {
    const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
		Axios({
			url: 'https://put-us-on-backend.herokuapp.com/project_submissions',
			method: 'GET',
		}).then((res) => {
			setPortfolio(res.data)
		});
	}, []);

    return (
			<div>
				{portfolio.map((data, key) => {
						return (
							<div className='results' key={key}>
								<h2 className='portfolio-name'>{data.name}</h2>
                                <img src={data.project_photo} alt='project images'/>
							</div>
						);
					})}
			</div>
		);
};

export default PortfolioDetails;