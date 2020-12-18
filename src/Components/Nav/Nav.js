import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import { AiFillCloseCircle } from 'react-icons/ai';
import { NavDetails } from '../NavDetails/NavDetails';
import './Nav.css';
import { IconContext } from 'react-icons';
import Axios from 'axios';

const Nav = ({ setLogIn }) => {
	const [sidebar, setSidebar] = useState(false);
	const history = useHistory();
	const handleLogOut = () => {
		// first clear local storage
		setLogIn(false);
		Axios({
			method: 'POST',
			url: 'https://put-us-on-backend.herokuapp.com/token/logout',
			headers: {
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		}).then((res) => {
			localStorage.clear();
			console.log(res);
			history.push('/');
		});
	};

	const showSideBar = () => setSidebar(!sidebar);
	return (
		<div>
			<IconContext.Provider value={{ color: 'white' }}>
				<div className='navbar'>
					<Link to='#' className='menu-bars'>
						<FcMenu onClick={showSideBar} />
					</Link>
				</div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className='nav-menu-items' onClick={showSideBar}>
						<li className='navbar-toggle'>
							<Link to='#' className='menu-bars'>
								<AiFillCloseCircle />
							</Link>
						</li>
						{NavDetails.map((menuItem, index) => {
							return (
								<li key={index} className={menuItem.cName}>
									<Link to={menuItem.path}>
										{menuItem.icon}
										<span>{menuItem.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>

			<button onClick={handleLogOut}>Log Out</button>
		</div>
	);
};

export default Nav;
