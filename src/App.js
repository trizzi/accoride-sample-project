import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ProductsInCart from './components/ProductsInCart';
import './App.css';

function App() {
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
							element={<Products />}
						/>
						<Route
							path='/product/:id'
							element={<ProductDetails />}
						/>
						<Route
							path='/product/cart'
							element={<ProductsInCart />}
						/>
					</Routes>
				</Router>
			</MDBRow>
		</MDBContainer>
	);
}

export default App;
