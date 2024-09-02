import React, { useContext, useEffect } from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBBtn,
} from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { currencySymbol } from './Products';
import ProductContext from '../context/ProductContext';
import axios from 'axios';
import { reduceLength } from './Products';

const ProductDetails = () => {
	const { product, setProduct, count, setCount, basket, setBasket } =
		useContext(ProductContext);

	const { id } = useParams();

	const navigate = useNavigate();

	const variables = {
		id: id,
	};

	const query = `query($id: ID){
		item(where: {id: $id}){
		  id
		  itemName
		  itemOverview
		  itemPrice
		  category
		  asset
		  createdAt
		}}`;

	useEffect(() => {
		const getProductDetail = async () => {
			await axios
				.request({
					url: 'https://eu-west-2.cdn.hygraph.com/content/cm0g9jq8704lz07vy2h5c3hoh/master',
					method: 'POST',
					data: {
						query,
						variables,
					},
				})
				.then((res) => {
					setProduct(res.data.data.item);
				})
				.catch((error) => console.error('Error fetching data', error));
		};
		getProductDetail();
	}, [id, setProduct]);

	const addProductToCart = () => {
		setCount(count + 1);
		setBasket([...basket, product]);
	};

	const handleCheckout = async () => {
		await axios
			.get(`http://localhost:1881/secret/${product?.itemPrice}`)
			.then((res) => {
				navigate(`/checkout/${res.data.client_secret}`);
			});
	};

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
					<p>ID: {id}</p>
					<p
						style={{
							color: 'red',
						}}>
						#{product?.category}
					</p>
					<hr />
					<img
						src={product?.asset?.imageURL}
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
					<h3 className='fw=400'>{product?.category}</h3>
					<strong style={{ fontSize: '32px' }}>
						{currencySymbol.format(product?.itemPrice)}
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
					<p>{reduceLength(product?.itemOverview, 200)}</p>
					<MDBBtn
						onClick={addProductToCart}
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
							icon='shopping-cart'
							onClick={handleCheckout}>
							Start Order Now
						</MDBIcon>
					</MDBBtn>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default ProductDetails;
