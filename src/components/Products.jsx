import React, { useContext } from 'react';
import { MDBRow, MDBCol, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProductContext from '../context/ProductContext';

export const currencySymbol = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'GBP',
});

export const reduceLength = (str, len) => {
	return String(str).length > len
		? String(str).substring(0, len - 1) + '...'
		: str;
};

const Products = ({ items }) => {
	const { searchTerm } = useContext(ProductContext);
	return (
		<>
			<SearchBar />

			<MDBRow
				style={{
					minheight: '100vh',
				}}
				id={'products'}
				className='mb-5 d-flex align-items-center justify-content-center'>
				{items
					.filter((val) => {
						if (searchTerm === '') {
							return val;
						} else if (
							val.itemOverview.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							return val;
						} else {
							return false;
						}
					})
					.map((item) => (
						<MDBCol
							size={6}
							md={4}
							lg={3}
							className='card shadow-3 m-2 g-3 d-flex align-items-center justify-content-center'
							style={{
								height: '500px',
							}}
							key={item}>
							<MDBRipple
								rippleColor='dark'
								rippleTag={'div'}
								className='bg-image hover-zoom'>
								<Link to={`/product/${item.id}`}>
									<img
										src={item.asset.imageURL}
										alt='asset'
										width={200}
										style={{
											padding: '20px',
										}}
									/>
								</Link>
							</MDBRipple>
							<div className='card-body me-auto'>
								<Link to={`/product/${item.id}`}>
									<p className='card-title'>
										{reduceLength(item.itemName, 25)}
									</p>

									<strong className='text-dark'>
										{currencySymbol.format(item.itemPrice)}
									</strong>
								</Link>
							</div>
							<div className='card-footer'>
								<small className='muted'>{item.category}</small>
							</div>
						</MDBCol>
					))}
			</MDBRow>
		</>
	);
};

export default Products;
