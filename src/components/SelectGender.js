import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaMale, FaFemale } from 'react-icons/fa';
import Layout from './Layout';
import '../styles/SelectGender.scss';
const SelectGender = () => {
	return (
		<Layout>
			<Container>
				<div className='rect'>
					<div className='wrapper mx-auto'>
						<h3 className='text-center mb-5'>Which gender do you prefer?</h3>
						<div className='gender_wrapper'>
							<div className='gender_card me-3'>
								<div>
									<FaMale size={45} />
									<p>Male</p>
								</div>
							</div>
							<div className='gender_card me-3'>
								<div>
									<FaFemale size={45} />
									<p>Female</p>
								</div>
							</div>
							<div className='gender_card'>
								<div>
									<FaMale size={45} />
									<FaFemale size={45} />
									<p>Any</p>
								</div>
							</div>
						</div>
						<div className='btnwrapper mx-auto mt-3'>
							<Button className='form_btn mt-4 ' type='submit'>
								Continue
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default SelectGender;
