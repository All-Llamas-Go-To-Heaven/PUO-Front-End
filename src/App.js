import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import BrowseProjects from './Components/BrowseProjects/BrowseProjects';
import CreateProject from './Components/CreateProject/CreateProject';
import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Footer/Footer';

function App() {
	return (
				<div className='App'>
		<div className='page-containers'>
			<div className='content-wrap'>
					<Router>
						<Nav />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/projects' exact component={BrowseProjects} />
							<Route path='/create' exact component={CreateProject} />
							<Route path='/login' exact component={LogIn} />
						</Switch>
					</Router>
					<Header />
				<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
