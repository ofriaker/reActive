import React from 'react';
import classes from './Item.module.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from 'mdb-react-ui-kit';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from '../../store/reducers/cart';



const Item = ({ product }) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    let productToCart = {
      ...product,
      flavour: product.flavours[0],
      quantity: 1
    };
    dispatch(addItem(productToCart));
  }


  return (
    <MDBCard style={{ height: '530px' }}>
      <div className={classes.card}>
        <Link to='/product' state={product}> 
        <MDBCardImage
          src={product.imgUrl}
          alt='...'
          position='top'>
        </MDBCardImage>
        </Link>
      </div>
      <MDBCardBody>
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <MDBCardText>
          {product.description}
        </MDBCardText>
        <MDBCardText className={classes.price}>
          {product.price}$<i className="fas fa-tag ms-1 p-1"></i>
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <button className={classes.add} onClick={onAddToCart}>Add to cart</button>
      </MDBCardFooter>
    </MDBCard>
  );
};



export default Item;