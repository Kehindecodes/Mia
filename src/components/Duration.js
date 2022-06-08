import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Layout from './Layout';
import '../styles/Duration.scss';
const Duration = () => {
	return (
		<Layout>
			<Container>
				<div className='duration_wrapper'>
					<h3>Duration Of Employment</h3>
					<div className='durations'>
						<Row>
							<Col className='me-3'>
								<div className='duration'>
									<h4 className='py-3'>Once A Week</h4>
									<p className='py-1'>
										Salary Up To{' '}
										<span className='text-primary'>3,000-4,000</span> Per Month
									</p>
								</div>
							</Col>
							<Col className='me-3'>
								<div className='duration'>
									<h4 className='py-3'>Twice A Week</h4>

									<p className='py-1'>
										Salary Up To{' '}
										<span className='text-primary'>5,000-8,000</span> Per Month
									</p>
								</div>
							</Col>
							<Col>
								<div className='duration'>
									<h4 className='py-3'>Three Times A Week</h4>
									<p className='py-1'>
										Salary Up To{' '}
										<span className='text-primary'>8,000-10,000</span> Per Month
									</p>
								</div>
							</Col>
						</Row>
						<Row className='mt-3'>
							<Col className='me-3'>
								<div className='duration'>
									<h4 className='py-3'>Four Times A Week</h4>
									<p className='py-1'>
										Salary Up To{' '}
										<span className='text-primary'>12,000-14,000</span> Per
										Month
									</p>
								</div>
							</Col>
							<Col className='me-3'>
								<div className='duration'>
									<h4 className='py-3'>Five Times A Week</h4>
									<p className='py-1'>
										Salary Up To{' '}
										<span className='text-primary'>13,000-15,000</span> Per
										Month
									</p>
								</div>
							</Col>
							<Col>
								<div className='duration'>
									<h4 className='py-3'>Six Times A Week</h4>
									<p className='py-1'>
										Salary Up To{' '}
										<span className='text-primary'>17,000-20,000</span> Per
										Month
									</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col className='last_col mt-3'>
								<div className='duration'>
									<h4 className='py-3'>Live-In</h4>
									<p className='py-1'>
										Salary Up To{' '}
										<span className='text-primary'>22,000-20 ,000</span> Per
										Month
									</p>
								</div>
							</Col>
						</Row>
					</div>
					<div className='btnwrapper mx-auto '>
						<Button className='form_btn ' type='submit'>
							Continue
						</Button>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default Duration;
