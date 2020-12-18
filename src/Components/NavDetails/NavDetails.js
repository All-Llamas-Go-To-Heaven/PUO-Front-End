import {
	AiFillHome,
	AiFillEdit,
	AiOutlineLaptop,
	AiFillTrophy,
	AiOutlineBulb,
	AiFillSecurityScan,
} from 'react-icons/ai';



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
		title: 'Search',
		path: '/search',
		icon: <AiFillSecurityScan />,
		cName: 'nav-text',
	},
	// {
	// 	title: 'Browse Projects',
	// 	path: '/projects',
	// 	icon: <AiFillTrophy />,
	// 	cName: 'nav-text',
	// },
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
