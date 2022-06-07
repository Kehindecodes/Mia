import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Navigation from './Navbar';
const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='header_btn_wrapper pt-2 text-end'>
					<div className='me-2'>
						<Button variant='outline-dark' className='me-3'>
							Refer Maid
						</Button>
						<Button variant='outline-dark' className='me-3'>
							Need A Job
						</Button>
						<Button className='header_btn'>Login</Button>
					</div>
				</div>
			</div>
			<div className='line_break my-2'></div>
			<Navigation />
		</header>
	);
};

export default Header;
