# Accoride E-commerce Sample
An e-commerce website built with React, Express, and Node.js that allows users to browse products, add items to the cart, update the cart, delete items from the cart, and make payments using Stripe. The application supports payments in any currency, providing a smooth and intuitive shopping experience.

## Table of Contents
- Features
- Tech Stack
- Installation
- Configuration
- Usage
- Scripts
- Folder Structure
- Contributing
- License

## Features
- Add to Cart: Easily add products to the shopping cart.
- Update Cart: Adjust product quantities or update the cart as needed.
- Delete Items from Cart: Remove unwanted items from the cart.
- Stripe Payments: Secure payment processing through Stripe, supporting various currencies.
- Responsive Design: Fully responsive UI, providing a smooth experience on any device.
  
## Tech Stack
- Frontend: React, MDB React UI Kit
- Backend: Express, Node.js
- Payments: Stripe

# Installation
## Prerequisites
- Node.js and npm installed on your local machine
- A Stripe account and API keys

## Steps
- Clone the repository:

```bash
git clone https://github.com/trizzi/accoride-sample-project.git
cd accoride-sample-project
```
- Install dependencies for both frontend and backend:

  Frontend:

```bash
cd client
npm install
```
  Backend:

```bash
cd server
npm install
```

- Set up Stripe (see Configuration below).

## Configuration
- Create a .env file in the server directory with the following environment variables:

```bash

STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLIC_KEY=your-stripe-public-key
Replace your-stripe-secret-key and your-stripe-public-key with your actual Stripe API keys.
```

## Usage
- Start the backend server:

```bash
cd server
npm run dev
```

- Start the frontend development server:

```bash
cd client
npm start
```

- Open your browser:

Navigate to http://localhost:3000 to view the e-commerce app.

## Scripts
Backend (in server folder)

npm run dev - Run the backend server with nodemon for hot reloading.
npm start - Run the backend server in production mode.

Frontend (in client folder)

npm start - Start the React development server.
npm run build - Build the React app for production.

## Folder Structure
```plaintext
.
├── client                 # React frontend
│   ├── public             # Static assets
│   ├── src
│   │   ├── components     # Reusable UI components
│   │   ├── pages          # Page components (e.g., Cart, Product)
│   │   ├── context        # Context API for state management
│   │   └── utils          # Helper functions (e.g., Stripe integration)
│   └── .env.local         # Environment variables for frontend (Stripe public key)
└── server                 # Node.js and Express backend
    ├── routes             # API routes
    ├── controllers        # API controllers
    ├── models             # Data models
    ├── utils              # Utility functions (e.g., Stripe configuration)
    └── .env               # Environment variables for backend (Stripe secret key)
```

## Key Technologies
1. React & MDB React UI Kit
React handles the component-based architecture for the frontend.
MDB React UI Kit is used for consistent, responsive, and beautiful UI components.
2. Express & Node.js
The backend is built with Express and Node.js, providing a REST API for handling cart operations and Stripe payment integration.
3. Stripe Payment Processing
Stripe handles secure payments in various currencies, giving customers a flexible and secure checkout experience.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements. For major changes, discuss them first to ensure they align with the project.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


