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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from '../../store/reducers/cart';



const Item = ({product}) => {
  const dispatch = useDispatch();
  
  const onAddToCart = () => {
    // console.log(product);
    let productToCart = {
      ...product,
      flavour : product.flavours[0],
      quantity : 1
    };
    console.log(productToCart);
    dispatch(addItem(productToCart));
  }


    return (
      <MDBCard style={{height:'530px'}}>
        <Link to='/product' state={product}> 
          <div className={classes.card}>
            <MDBCardImage 
              src={product.imgUrl}
              alt='...'
              position='top'>
              {/* <Link to='/prosuct' style={{ color: '#333333' }}></Link> */}
            </MDBCardImage>
            </div>
          <MDBCardBody>
            <MDBCardTitle>{product.name}</MDBCardTitle>
            <MDBCardText>
              {product.description}
              <h4 className='price'>{product.price}$<i className="fas fa-tag ms-1 p-1"></i></h4>
            </MDBCardText>
          </MDBCardBody>
          </Link>
          <MDBCardFooter>
          <button className={classes.add} onClick={onAddToCart}>Add to cart</button>
          </MDBCardFooter>
        </MDBCard> 
    );
  };

 
  
  export default Item;