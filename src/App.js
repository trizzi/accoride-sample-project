import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ProductsInCart from './components/ProductsInCart';
import Checkout from './components/Checkout';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentSucess from './components/PaymentSucess';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getAllProducts = async () => {
			await axios
				.request({
					url: 'https://eu-west-2.cdn.hygraph.com/content/cm0g9jq8704lz07vy2h5c3hoh/master',
					method: 'POST',
					data: {
						query: `{items{
            id,
            itemName,
            itemOverview,
            itemPrice,
            category,
            asset,
            createdAt,
          }}`,
					},
				})
				.then((res) => setItems(res.data.data.items));
		};
		getAllProducts();
	}, []);

	return (
		<MDBContainer
			style={{
				paddingTop: '10px',
			}}>
			<MDBRow
				style={{
					marginTop: '60px',
				}}>
				<Router>
					<MDBCol>
						<NavBar />
					</MDBCol>
					<Routes>
						<Route
							path='/'
							element={<Products items={items} />}
						/>
						<Route
							path='/product/:id'
							element={<ProductDetails />}
						/>
						<Route
							path='/product/cart'
							element={<ProductsInCart />}
						/>
						<Route
							path='/checkout/:id'
							element={<Checkout />}
						/>
						<Route
							path='/payment/success'
							element={<PaymentSucess />}
						/>
					</Routes>
				</Router>
			</MDBRow>
		</MDBContainer>
	);
}

export default App;
