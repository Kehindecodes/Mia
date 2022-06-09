import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from './Layout';
import '../styles/NeedJob.scss';
import { FaCamera } from 'react-icons/fa';
const NeedJob = () => {
	return (
		<Layout>
			<Container>
				<div className='job_form_wrapper'>
					<h1 className='mb-5'>Need a Job?</h1>
					<Form>
						<Row className='mb-3'>
							<Col>
								<Form.Control placeholder='Full name' type='text' />
							</Col>
							<Col>
								<Form.Control placeholder='Mobile number' />
							</Col>
						</Row>
						<Row className='mb-3'>
							<Col>
								<Form.Control placeholder='Your email' type='email' />
							</Col>
							<Col>
								<Form.Control placeholder='Your age' />
							</Col>
						</Row>
						<Row className='mb-3'>
							<Col>
								<Form.Control
									placeholder='Your family background'
									type='text'
								/>
							</Col>
							<Col>
								<Form.Select>
									<option>Language</option>
									<option value='english'>English</option>
									<option value='Yoruba'>Yoruba</option>
									<option value='Igbo'>Igbo</option>
									<option value='Hausa'>Hausa</option>
								</Form.Select>
							</Col>
						</Row>
						<Row className='mb-3'>
							<Col>
								<Form.Control placeholder='Select Job Locoation' type='text' />
							</Col>
							<Col>
								<Form.Select>
									<option>What type of work do need?</option>
									<option value='english'>English</option>
									<option value='Yoruba'>Yoruba</option>
									<option value='Igbo'>Igbo</option>
									<option value='Hausa'>Hausa</option>
								</Form.Select>
							</Col>
						</Row>
						<Row className='mb-3'>
							<Col>
								<Form.Select>
									<option>Select education level </option>
									<option value='english'>English</option>
									<option value='Yoruba'>Yoruba</option>
									<option value='Igbo'>Igbo</option>
									<option value='Hausa'>Hausa</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Control
									placeholder='Years of work exprirence'
									type='text'
								/>
							</Col>
						</Row>
						<Row className='mb-3'>
							<Col>
								<Form.Select>
									<option>How many days of week do you work? </option>
									<option value='4days'>4days</option>
									<option value='3days'>3days</option>
									<option value='5days'>5days</option>
									<option value='7days'>7days</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Control placeholder='How much do you want to earn?' />
							</Col>
						</Row>
						<Row className='mb-3'>
							<Col>
								<div className='radio-option'>
									<p className='d-inline me-4'>Are you pet-friendly?</p>
									<Form.Check inline type={'radio'} label={'Yes'} id={'yes'} />
									<Form.Check inline type={'radio'} label={'No'} id={'no'} />
								</div>
							</Col>
							<Col>
								<Form.Control placeholder='How much do you want to earn?' />
							</Col>
						</Row>
						<Row className='mb-3'>
							<Col>
								<Form.Select>
									<option>when is the good time to contact you? </option>
									<option value='4days'>4days</option>
									<option value='3days'>3days</option>
									<option value='5days'>5days</option>
									<option value='7days'>7days</option>
								</Form.Select>
							</Col>
							<Col></Col>
						</Row>
						<div className='add_info mt-5'>
							<h3>Additional information</h3>
							<p className='mb-4'>
								Please fill out this box if you have additional information you
								need <br />
								your employer to know.
							</p>

							<Row className='mb-3'>
								<Col>
									<Form.Control placeholder='Travel requirement' type='text' />
								</Col>
								<Col>
									<Form.Control placeholder='Medical condition' type='text' />
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Control placeholder='Specific condition' type='text' />
								</Col>
								<Col></Col>
							</Row>
						</div>
						<div className='docs mt-5'>
							<h3 className='mb-5'>
								Upload these documents for better <br />
								employment options
							</h3>
							<Row className='mb-3'>
								<Col>
									<div class='custom-file'>
										<input
											type='file'
											class='file_input'
											id='field-upload'
											name='upload'
											required
										/>
										<label class='file_label' for='field-upload'>
											Upload a photo
											<FaCamera />
										</label>
									</div>
									{/* <Form.Control type='file' placeholder='Upload a photo' /> */}
								</Col>
								<Col>
									<div class='custom-file'>
										<input
											type='file'
											class='file_input'
											id='field-upload'
											name='upload'
										/>
										<label class='file_label' for='field-upload'>
											Upload ID or Passport
											<FaCamera />
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div class='custom-file'>
										<input
											type='file'
											class='file_input'
											id='field-upload'
											name='upload'
										/>
										<label class='file_label' for='field-upload'>
											Upload Police Background check(Optional)
											<FaCamera />
										</label>
									</div>
									{/* <Form.Control
										type='file'
										placeholder='Upload Police Background check(Optional)'
									/> */}
								</Col>
								<Col>
									<div class='custom-file'>
										<input
											type='file'
											class='file_input'
											id='field-upload'
											name='upload'
											required
										/>
										<label class='file_label' for='field-upload'>
											Upload job references from previous employers for a better
											salary (Optional)
											<FaCamera />
										</label>
									</div>
									{/* <Form.Control
										type='file'
										placeholder='Upload job references from previous employers for a better salary (Optional) '
									/> */}
								</Col>
							</Row>
						</div>
						<div className='btnwrapper mx-auto mt-5 '>
							<Button className='form_btn ' type='submit'>
								Continue
							</Button>
						</div>
					</Form>
				</div>
			</Container>
		</Layout>
	);
};

export default NeedJob;
