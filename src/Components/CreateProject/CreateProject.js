import React from 'react';

const CreateProject = () => {
    return (
			<div className='sign-up-box'>
                <h2>Create a project</h2>
				<form>
					<label>Name:</label>
					<input type='text' name='name' id='name' />
					<label>Language used:</label>
					<input name='language_used' id='language_used' type='text' />
					<label>Project name:</label>
					<input type='text' name='project_name' id='project_name' />
					<label>Project description:</label>
					<input type='text' name='project_description' id='project_description' />
					<label>Project url:</label>
					<input type='text' name='project_description' id='project_description' />
					<label>Project photo:</label>
					<input type='text' name='project_photo' id='project_photo' />
					<label>Portfolio url:</label>
					<input type='text' name='portfolio_url' id='portolio_url' />
				</form>
			</div>
		);
};

export default CreateProject;