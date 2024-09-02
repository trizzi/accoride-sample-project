import React from 'react';
import { MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const PaymentSucess = () => {
	return (
		<MDBContainer
			style={{
				minHeight: '100vh',
			}}>
			<Link to={'/'}>
				<MDBIcon
					fas
					icon='home'
				/>
			</Link>
			<strong
				className='text-dark'
				style={{
					marginTop: '100px',
				}}>
				Payment has been received.
			</strong>
		</MDBContainer>
	);
};

export default PaymentSucess;
