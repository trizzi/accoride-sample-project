import React from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardFooter,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { currencySymbol } from './Products';

const ProductsInCart = () => {
	return (
		<MDBContainer>
			<Link>
				<MDBIcon
					fas
					icon='home'></MDBIcon>
			</Link>
			<MDBRow>
				<MDBCol
					md={12}
					lg={6}>
					<div>
						<h4>You have not added anything to the cart</h4>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							margin: '20px 0',
							padding: '10px 0',
							alignItems: 'center',
							justifyContent: 'space-between',
							borderBottom: 'ipx solid #000',
						}}>
						<Link
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
							to='/product/1'>
							<img
								src={'https://i.ibb.co/pw0fGmx/gaming-Controller.webp'}
								alt='product-image'
								style={{
									maxWidth: '50px',
									maxHeight: '100px',
								}}
							/>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									margin: '0px 20px',
									padding: 0,
									fontSize: '25px',
								}}>
								<p className='p-0 m-0'>Pad</p>
								<strong className='text-dark'>
									{currencySymbol.format(205)}
								</strong>
							</div>
						</Link>
						<span>
							<MDBIcon
								color='danger'
								style={{ cursor: 'pointer' }}
								far
								icon='trash-alt'
							/>
						</span>
					</div>
				</MDBCol>
				<MDBCol>
					<MDBCard>
						<MDBCardTitle>
							<h3 className='m-0 text-center mt-2'>Checkout</h3>
						</MDBCardTitle>
						<hr />
						<MDBCardFooter
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}>
							<small>Total: </small>
							<strong>{currencySymbol.format(205)}</strong>
						</MDBCardFooter>
					</MDBCard>
					<div className='d-grid gap-2 d-md-flex justify-content-md-end mt-3'>
						<MDBBtn
							color='info'
							type='primary'>
							Pay Now
						</MDBBtn>
					</div>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default ProductsInCart;
