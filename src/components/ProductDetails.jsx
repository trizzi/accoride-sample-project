import React from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { currencySymbol } from './Products';

const ProductDetails = () => {
	return (
		<MDBContainer className='mb-5'>
			<Link to={'/'}>
				<MDBIcon
					fas
					icon='home'
				/>
			</Link>
			<MDBRow>
				<MDBCol
					size={12}
					lg={4}
					id='firstCol'>
					<p>Product Details</p>
					<p>ID: 1</p>
					<p
						style={{
							color: 'red',
						}}>
						#Pad
					</p>
					<hr />
					<img
						src={'https://i.ibb.co/pw0fGmx/gaming-Controller.webp'}
						alt='asset'
						style={{
							maxWidth: '300px',
							maxHeight: '300px',
						}}
					/>
					<hr />
				</MDBCol>
				<MDBCol
					size={12}
					lg={4}
					id='secondCol'>
					<h3 className='fw=400'>Pad</h3>
					<strong style={{ fontSize: '32px' }}>
						{currencySymbol.format(205)}
					</strong>
				</MDBCol>
				<MDBCol
					size={12}
					lg={4}
					id='thirdCol'
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: '30px',
					}}>
					<p>Item Description</p>
					<MDBBtn
						className='ms-2'
						tag={'a'}
						color='success'
						size='lg'
						outline>
						<MDBIcon
							fas
							icon='shopping-cart'>
							Add to cart
						</MDBIcon>
					</MDBBtn>
					<MDBBtn
						className='ms-2 mt-2'
						tag={'a'}
						color='success'
						size='lg'
						outline>
						<MDBIcon
							fas
							icon='shopping-cart'>
							Start Order Now
						</MDBIcon>
					</MDBBtn>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default ProductDetails;
