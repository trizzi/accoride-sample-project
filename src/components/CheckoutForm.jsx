import { useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentElement } from '@stripe/react-stripe-js';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: 'http://localhost:3001/payment/success',
			},
		});
		if (error) {
			navigate('/');
		}
	};

	return (
		<MDBContainer>
			<MDBRow center>
				<MDBCol
					md={12}
					lg={6}>
					<form action=''>
						<h3>Payment</h3>
						<PaymentElement />
						<div className='d-flex justify-content-end mt-3'>
							<MDBBtn onClick={() => navigate('/')}>Back</MDBBtn>
							<MDBBtn onClick={handleSubmit}>Submit</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default CheckoutForm;
