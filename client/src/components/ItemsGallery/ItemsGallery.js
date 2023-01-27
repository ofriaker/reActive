import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Item from '../Item/Item';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from '../../store/middlewares/products';
import { isLoading, selectProducts} from '../../store/selectors/products';


const ItemsGallry = ({catagory}) => {

    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchAllProducts());
      }, []); 

    const filterProducts= products.filter((product) => {
        if(catagory != null) {
            return (product.category== catagory);
        }
        return product;
    })
      
    return (
    <div className='container'>
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        {filterProducts.map((product) => (
            <MDBCol><Item product={product}></Item></MDBCol>
        ))}
      </MDBRow>
    </div>
      
    );
  };
  
  export default ItemsGallry;