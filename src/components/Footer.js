import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	TiSocialTwitterCircular,
	TiSocialFacebookCircular,
	TiSocialLinkedinCircular,
} from 'react-icons/ti';

const Footer = () => {
	return (
		<footer>
			<div className='footer_wrapper'>
				<Container>
					<Row>
						<Col md='4' className='me-5'>
							<div className='company'>
								<div className='logo'>
									<a href='#home' className='text-primary'>
										MIA
										<small>maidinaddis.com</small>
									</a>
								</div>

								<p>
									We Are India's Largest Online Aggregator Of Maid Bureaus.
									Whether You Are Looking For A Maid Or A Nanny Or A Patient
									Caretaker In Mumbai, Thane, Navi Mumbai, Pune, Bangalore,
									Surat, You Will Find The Best Quality And Experienced Staff
									Here.
								</p>
							</div>
						</Col>
						<Col className='me-5'>
							<div className='quickLinks'>
								<h5>About Maidinaddis.com</h5>
								<div className='link_wrapper'>
									<a href='#home' className='mb-2'>
										Home
									</a>
									<a href='#about' className='mb-2'>
										About us
									</a>
									<a href='#terms' className='mb-2'>
										Terms Of Use
									</a>
									<a href='#privacy' className='mb-2'>
										Privacy Policy
									</a>
									<a href='#blacklisted' className='mb-2'>
										Blacklisted Maids
									</a>
									<a href='#contact'>Contact Us</a>
								</div>
							</div>
						</Col>
						<Col md='3'>
							<div className='partner'>
								<h5>Partner With Us</h5>
								<p>
									Are You An Agency Which Supplies Maids / Baby Sitters /
									Patient Care Staff ? Partner With Us And Earn Extra Money
								</p>
							</div>
						</Col>
						{/* <Col>
							
						</Col> */}
					</Row>
					<div className='socials mt-5'>
						<h5>Connect With Us </h5>
						<div className='icons'>
							<a
								href='www.twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-black'>
								<TiSocialTwitterCircular size={34} className='me-2' />
							</a>

							<a
								href='http://'
								target='_blank'
								rel='noopener noreferrer'
								className='text-black'>
								<TiSocialFacebookCircular size={34} className='me-2' />
							</a>

							<a
								href='http://'
								target='_blank'
								rel='noopener noreferrer'
								className='text-black'>
								<TiSocialLinkedinCircular size={34} />
							</a>
						</div>
					</div>
				</Container>
			</div>

			<div className='copyright bg-primary pt-4 pb-4'>
				<Container>
					<div className=''>
						<p className='text-white my-auto'>
							© 2022 Maidinaddis. All rights reserved.
						</p>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
