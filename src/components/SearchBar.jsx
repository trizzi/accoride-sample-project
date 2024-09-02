import React, { useContext } from 'react';
import { MDBRow, MDBBtn, MDBInput, MDBCol } from 'mdb-react-ui-kit';
import ProductContext from '../context/ProductContext';

const SearchBar = () => {
	const { setSearchTerm } = useContext(ProductContext);

	const handleChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};
	return (
		<form>
			<MDBRow className='mb-3'>
				<MDBCol
					size={8}
					md={10}>
					<MDBInput
						label='Search...'
						type='text'
						onChange={handleChange}
					/>
				</MDBCol>
				<MDBCol
					size={4}
					md={2}>
					<MDBBtn
						type='submit'
						online
						color='danger'>
						Search
					</MDBBtn>
				</MDBCol>
			</MDBRow>
		</form>
	);
};

export default SearchBar;
