import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Navbar bg='white' variant='white' className='col'>
				<div className='container'>
					<Navbar.Brand href='#home'>MIA</Navbar.Brand>
					<Nav className='me-3'>
						<Nav.Link href='#home' className='me-3'>
							Home
						</Nav.Link>
						<Nav.Link href='#howitworks' className='me-3'>
							How it works
						</Nav.Link>
						<Nav.Link href='#pricing' className='me-3'>
							What we offer
						</Nav.Link>
						<Nav.Link href='#pricing' className='me-3'>
							Our charges
						</Nav.Link>
						<Nav.Link href='#Contact Us'>Contact Us</Nav.Link>
					</Nav>
				</div>
			</Navbar>
		</>
	);
};

export default Navigation;
