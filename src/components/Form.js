import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ContactForm = () => {
	return (
		<Form>
			<Row>
				<Col>
					<Form.Control placeholder='Your name' type='text' />
				</Col>
				<Col>
					<Form.Control placeholder='Enter email' type='email' />
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col>
					<Form.Select>
						<option>Select city</option>
						<option value='1'>Nigeria</option>
						<option value='2'>Ghana</option>
						<option value='3'>Kenya</option>
					</Form.Select>
				</Col>
				<Col>
					<Form.Select>
						<option>Select reason</option>
						<option value='1'>Nigeria</option>
						<option value='2'>Ghana</option>
						<option value='3'>Kenya</option>
					</Form.Select>
				</Col>
			</Row>
			<Form.Control
				as='textarea'
				rows={3}
				placeholder='Comment'
				className='mt-4'
			/>
			<Button variant='primary' className='form_btn mt-4' type='submit'>
				Submit
			</Button>
		</Form>
	);
};

export default ContactForm;
