import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from './Layout';
import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/';
const MatchRequirement = () => {
	const [match, setMatch] = useState(null);
	// get all match requirements
	useEffect(() => {
		const getMatch = async () => {
			const response = await axios.get(
				`${baseUrl}Kehindecodes/fake-mia-API/maids`,
			);
			setMatch(response.data);
			console.log(response.data);
		};
		getMatch();
	}, []);

	return (
		<Layout>
			<Container></Container>
		</Layout>
	);
};

export default MatchRequirement;
