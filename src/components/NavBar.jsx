import React, { useContext } from 'react';
import {
	MDBNavbarNav,
	MDBNavbar,
	MDBContainer,
	MDBNavbarItem,
	MDBIcon,
	MDBBadge,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ProductContext from '../context/ProductContext';

const NavBar = () => {
	const { count } = useContext(ProductContext);
	return (
		<div>
			<MDBNavbar
				expand='lg'
				light
				bgColor='light'
				className='mb-3 fixed-top'>
				<MDBContainer fluid>
					<MDBNavbarNav
						left
						fullWidth={false}
						className='d-flex flex-row'>
						<MDBNavbarItem className='me-3 me-lg-2'>
							<Link to='/'>
								<h3>Accoride</h3>
							</Link>
						</MDBNavbarItem>
					</MDBNavbarNav>
					<MDBNavbarNav
						fullWidth={false}
						className='d-flex flex-row'>
						<MDBNavbarItem className='me-3 me-lg-2'>
							<MDBIcon
								size='lg'
								spin
								fab
								icon='react'
							/>
						</MDBNavbarItem>
					</MDBNavbarNav>
					<MDBNavbarNav
						right
						fullWidth={false}
						className='d-flex flex-row'>
						<MDBNavbarItem>
							<Link to='/product/cart'>
								<span>
									<MDBIcon
										fas
										icon='shopping-cart'
									/>
								</span>
								<MDBBadge
									pill
									color='danger'>
									{count}
								</MDBBadge>
							</Link>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBContainer>
			</MDBNavbar>
		</div>
	);
};

export default NavBar;
