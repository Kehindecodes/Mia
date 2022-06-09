import React, { useState } from 'react';
import Layout from './Layout';
import { Modal, Button, Row, Col, ModalFooter } from 'react-bootstrap';
import '../styles/SalaryPopup.scss';

function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size='lg' centered>
			<Modal.Header closeButton>
				{/* <Modal.Title id='contained-modal-title-vcenter'>
					Modal heading
				</Modal.Title> */}
			</Modal.Header>

			<Modal.Body className='text-center'>
				<h1 className='mb-3'>Details of service you need</h1>
				<p>
					Your Salary Budget Is Less Than Market Standard. We Might Not Able To
					Find A Maid In Your Budget
				</p>
			</Modal.Body>
			<Modal.Footer className='mb-3'>
				<Row>
					<Col>
						<Button className='popup_btn revise' onClick={props.onHide}>
							REVISE THE SALARY
						</Button>
					</Col>
					<Col>
						<Button className='popup_btn cont' onClick={props.onHide}>
							CONTINUE IN SAME SALARY
						</Button>
					</Col>
				</Row>
			</Modal.Footer>
		</Modal>
	);
}

const SalaryPopup = () => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<Layout>
			<Button
				variant='primary'
				onClick={() => setModalShow(true)}
				className='my-5'>
				Launch vertically centered modal
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</Layout>
	);
};

export default SalaryPopup;
