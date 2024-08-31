import React from 'react';
import { MDBRow, MDBBtn, MDBInput, MDBCol } from 'mdb-react-ui-kit';

const SearchBar = () => {
	return (
		<form>
			<MDBRow className='mb-3'>
				<MDBCol
					size={8}
					md={10}>
					<MDBInput
						label='Search...'
						type='text'
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
