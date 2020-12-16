import React from 'react';
import { FcMenu } from 'react-icons/fc';
import {
	AiFillHome,
	AiFillEdit,
	AiOutlineLaptop,
	AiFillTrophy,
	AiOutlineBulb,
} from 'react-icons/ai';
import { IoIcons} from 'react-icons/io';


export const NavDetails = [
	{
		title: 'Home',
		path: '/',
		icon: <AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'Create Project',
		path: '/create',
		icon: <AiFillEdit />,
		cName: 'nav-text',
	},
	{
		title: 'Browse Projects',
		path: '/projects',
		icon: <AiFillTrophy />,
		cName: 'nav-text',
	},
	{
		title: 'My Projects',
		path: '/user/',
		icon: <AiOutlineBulb />,
		cName: 'nav-text',
	},
	{
		title: 'Log In',
		path: '/login',
		icon: <AiOutlineLaptop />,
		cName: 'nav-text',
	},
];
// const NavDetails = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default NavDetails;