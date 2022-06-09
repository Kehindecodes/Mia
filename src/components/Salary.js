import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Layout from './Layout';
import '../styles/Salary.scss';

const Salary = () => {
	return (
		<Layout>
			<Container>
				<div className=' salary_form_wrapper'>
					<Form>
						<Form.Label className='mb-4'>
							The Approximate Salary For A Maid Who Works 1 Hour Daily In Birr.
							3000 To 4000 <br /> Per Month
						</Form.Label>
						<Form.Select>
							<option>Select maximum salary</option>
							<option value='1'>One</option>
							<option value='2'>Two</option>
							<option value='3'>Three</option>
						</Form.Select>
						<div className='btnwrapper mx-auto mt-3'>
							<Button className='form_btn mt-4 ' type='submit'>
								Continue
							</Button>
						</div>
					</Form>
				</div>
			</Container>
		</Layout>
	);
};

export default Salary;
