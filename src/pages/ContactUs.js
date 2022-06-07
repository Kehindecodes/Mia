import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/Form';
import Layout from '../components/Layout';
import '../styles/ContactUs.scss';

const ContactUs = () => {
	return (
		<Layout>
			<Container>
				<div className='form_wrapper'>
					<h1 className='mb-5'>Say Hello!</h1>
					<ContactForm />
				</div>
			</Container>
		</Layout>
	);
};

export default ContactUs;
