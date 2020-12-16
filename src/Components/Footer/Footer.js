import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<div className='main-footer'>
			<div className='container'>
				<div className='row'>
					{/* first column */}
					<div className='col'>
						<h4>Meet The Developers</h4>
						<ul className='list-unstyled'>
							<li>
								<a href='https://github.com/All-Llamas-Go-To-Heaven'>
									Put Us On Git Hub Repo
								</a>
							</li>
						</ul>
					</div>
					{/* second column */}
					<div className='col'>
						<h4>Rashawn Isaac Gordon</h4>
						<ul className='list-unstyled'>
							<li>
								<a href='https://www.linkedin.com/in/rashawn-isaac-gordon/'>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
					{/* third column */}
					<div className='col'>
						<h4>Nickos Papageorge</h4>
						<ul className='list-unstyled'>
							<li>
								<a href='https://www.linkedin.com/in/nickos-papageorge/'>
									LinkedIN{' '}
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className='row'>
					<p className='col-sm'>
						&copy;{new Date().getFullYear()} Fire Breathing Llamas Inc.| All
						Reserved | Hire Us Please
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
