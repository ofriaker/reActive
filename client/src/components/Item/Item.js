import React from 'react';
import  classes from './Item.module.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from 'mdb-react-ui-kit';

const Item = ({product}) => {
    return (
      <MDBCard>
        <div className={classes.card}>
          <MDBCardImage 
            src={product.productImageUrl}
            alt='...'
            position='top'
            width='150px'
            height='300px'>
          </MDBCardImage>
          </div>
          <MDBCardBody>
            <MDBCardTitle>{product.name}</MDBCardTitle>
            <MDBCardText>
              {product.description}
              <h4>{product.price}$<i className="fas fa-tag ms-1 p-1"></i></h4>
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <button className={classes.add}>Add to cart</button>
          </MDBCardFooter>
        </MDBCard> 
    );
  };
  
  export default Item;