import React from 'react';
import logo from '../../Images/PutUsOnLogoJPG.jpg';
import './Header.css'
const Header = () => {
    return (
			<div>
				<img className='puo-logo' src={logo} alt='this is the logo' />
			</div>
		);
};

export default Header;