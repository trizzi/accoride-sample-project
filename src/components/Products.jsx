import React from 'react';
import { MDBRow, MDBCol, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export const currencySymbol = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'GBP',
});

const Products = () => {
	return (
		<>
			<SearchBar />
			<MDBRow
				style={{
					minheight: '100vh',
				}}
				id={'products'}
				className='mb-5 d-flex align-items-center justify-content-center'>
				<MDBCol
					size={6}
					md={4}
					lg={3}
					className='card shadow-3 m-2 g-3 d-flex align-items-center justify-content-center'
					style={{
						height: '350px',
					}}>
					<MDBRipple
						rippleColor='dark'
						rippleTag={'div'}
						className='bg-image hover-zoom'>
						<Link to={'/product/1'}>
							<img
								src='https://i.ibb.co/pw0fGmx/gaming-Controller.webp'
								alt='asset'
								width={200}
								style={{
									padding: '20px',
								}}
							/>
						</Link>
					</MDBRipple>
					<div className='card-body me-auto'>
						<Link to={'/'}>
							<p className='card-title'>PS5 Pad</p>
							<strong className='text-dark'>
								{currencySymbol.format(205)}
							</strong>
						</Link>
					</div>
					<div className='card-footer'>
						<small className='muted'>Pad</small>
					</div>
				</MDBCol>
			</MDBRow>
		</>
	);
};

export default Products;
