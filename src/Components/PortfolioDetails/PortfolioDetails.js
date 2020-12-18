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
								<Link>{data.name}</Link>
                                <img src={data.project_photo}/>
							</div>
						);
					})}
			</div>
		);
};

export default PortfolioDetails;