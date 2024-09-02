import React, { useContext } from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBBtn,
	MDBCard,
	MDBCardTitle,
	MDBCardFooter,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { currencySymbol } from './Products';
import ProductContext from '../context/ProductContext';
import { reduceLength } from './Products';
import axios from 'axios';

const ProductsInCart = () => {
	const navigate = useNavigate();
	const { basket, setBasket, count, setCount } = useContext(ProductContext);

	const removeFromCart = (i) => {
		const newCartList = basket.filter((x, index) => index !== i);
		setBasket([...newCartList]);
		setCount(count - 1);
	};

	let sum = basket?.reduce((prevVal, currVal) => {
		return prevVal + currVal?.itemPrice;
	}, 0);

	const handleCheckout = async () => {
		await axios.get(`http://localhost:1881/secret/${sum}`).then((res) => {
			navigate(`/checkout/${res.data.client_secret}`);
		});
	};

	return (
		<MDBContainer>
			<Link to={'/'}>
				<MDBIcon
					fas
					icon='home'></MDBIcon>
			</Link>
			<MDBRow>
				<MDBCol
					md={12}
					lg={6}>
					{basket.length === 0 ? (
						<div>
							<h4>You have not added anything to the cart</h4>
						</div>
					) : (
						basket.map((_, i) => (
							<div
								key={i}
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
									to={`/product/${_?.id}`}>
									<img
										src={_?.asset.imageURL}
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
										<p className='p-0 m-0'>{reduceLength(_.itemName, 20)}</p>
										<strong className='text-dark'>
											{currencySymbol.format(_.itemPrice)}
										</strong>
									</div>
								</Link>
								<span>
									<MDBIcon
										color='danger'
										style={{ cursor: 'pointer' }}
										far
										icon='trash-alt'
										onClick={() => removeFromCart(i)}
									/>
								</span>
							</div>
						))
					)}
				</MDBCol>
				{basket.length > 0 && (
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
								<strong>{currencySymbol.format(sum)}</strong>
							</MDBCardFooter>
						</MDBCard>
						<div className='d-grid gap-2 d-md-flex justify-content-md-end mt-3'>
							<MDBBtn
								color='info'
								type='primary'
								onClick={handleCheckout}>
								Pay Now
							</MDBBtn>
						</div>
					</MDBCol>
				)}
			</MDBRow>
		</MDBContainer>
	);
};

export default ProductsInCart;
