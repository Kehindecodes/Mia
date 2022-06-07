import React from 'react';
import { Card, Container, Stack, Button } from 'react-bootstrap';
import Layout from './Layout';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../styles/AfterSelection.scss';
const AfterSelection = () => {
	return (
		<Layout>
			<Container>
				<div className='selection_wrapper'>
					<div className='content'>
						<h3>How urgent is your requirement?</h3>
						<div className='selections'>
							<Stack direction='horizontal' gap={2}>
								<Card>
									<Card.Body>
										<div className='icon_wrapper '>
											<FaRegCalendarAlt size={22} />
										</div>
										<div className='text-left ms-3'>
											<Card.Title>Urgent Requirement</Card.Title>
											<Card.Text>
												We Will Contact You Within Two Business Days
											</Card.Text>
										</div>
									</Card.Body>
								</Card>
								<Card>
									<Card.Body>
										<div className='icon_wrapper me-3'>
											<FaRegCalendarAlt size={22} />
										</div>
										<div>
											<Card.Title>Urgent Requirement</Card.Title>
											<Card.Text>
												We Will Contact You Within 7 Business Days
											</Card.Text>
										</div>
									</Card.Body>
								</Card>
								<Card>
									<Card.Body>
										<div className='icon_wrapper me-3'>
											<FaRegCalendarAlt size={22} />
										</div>
										<div>
											<Card.Title>Urgent Requirement</Card.Title>
											<Card.Text>
												We Will Contact You When You're Ready
											</Card.Text>
										</div>
									</Card.Body>
								</Card>
							</Stack>
						</div>
						<div className='btnwrapper mx-auto '>
							<Button className='form_btn ' type='submit'>
								Continue
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default AfterSelection;
