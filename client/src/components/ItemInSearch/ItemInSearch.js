import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";




const ItemInSearch = ({ product, queryReset }) => {
  
  return (
    <MDBRow>
      <div>
        <Link to='/product' state={product}> 
        <MDBCardImage
          src={product.imgUrl}
          alt='...'
          position='top'
          onClick={queryReset}>
        </MDBCardImage>
        </Link>
      </div>
      <MDBCardBody>
        <MDBCardText>{product.name}</MDBCardText>
      </MDBCardBody>
    </MDBRow>
  );
};



export default ItemInSearch;