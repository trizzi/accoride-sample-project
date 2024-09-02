import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripe = loadStripe(
	'pk_test_51PrO1EHe0Py4d3XY4h5cSEXqN7cSLEbQKY1Wtqx5CFxIFvQgAjnhGfonqGOl3G94iao6cLQIILxwftV8aUkVcQc4003ZLsYKsV',
);
const loader = `auto`;
const Checkout = () => {
	const { id } = useParams();
	let clientSecret = id;

	return (
		<Elements
			stripe={stripe}
			options={{ clientSecret, loader }}>
			<CheckoutForm />
		</Elements>
	);
};

export default Checkout;
