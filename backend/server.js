const express = require('express');
const { SECRET_KEY } = require('./secret');
const cors = require('cors');
const app = express();

const stripe = require('stripe')(SECRET_KEY);

app.use(express.json());

app.use(
	cors({
		origin: 'http://localhost:3000', // Replace with your frontend URL
		methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
		credentials: true, // Allow cookies and credentials
	}),
);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

	next();
});

app.get('/secret/:amt', async (req, res) => {
	try {
		const amount = parseInt(req.params.amt) * 100; // Convert to cents
		if (isNaN(amount) || amount <= 0) {
			return res.status(400).send({ error: 'Invalid amount' });
		}

		const paymentIntent = await stripe.paymentIntents.create({
			currency: 'GBP',
			amount: amount,
			automatic_payment_methods: { enabled: true },
		});

		res.status(200).send({ client_secret: paymentIntent.client_secret });
	} catch (error) {
		console.error('Error creating payment intent:', error);
		res.status(500).send({ error: 'Failed to create payment intent' });
	}
});

app.listen(1881, () => {
	console.log('Server running on port 1881');
});
