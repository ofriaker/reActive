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
    let productToCart = {
      ...product,
      flavour : product.flavours[0],
      quantity : 1
    };
    dispatch(addItem(productToCart));
  }


    return (
      <MDBCard style={{height:'540px'}}>
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
            <MDBCardTitle style={{height: '25px', fontSize:'18px'}}>{product.name}</MDBCardTitle>
            <MDBCardText style={{color:'#333333', fontSize:'15px', height:'40px'}}>
              {product.description}  
                    
            </MDBCardText>
            <h4 style={{textAlign:'right'}} ><i className="fas fa-tag ms-1 p-1" style={{color:'#008190'}}></i>{product.price}₪</h4>
          </MDBCardBody>
          </Link>
          <MDBCardFooter>
          <button className={classes.add} onClick={onAddToCart}>Add to cart</button>
          </MDBCardFooter>
        </MDBCard> 
    );
  };

 
  
  export default Item;