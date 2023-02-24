import React from 'react';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Item from '../Item/Item';
import classes from './ItemsGallery.module.css'

const ItemsGallery = ({products}) => {
    return (
    <div className='container'>
      { products.length === 0 ? 
          <div className={classes.error}>Sorry We Couldn't Find Any Results Matching Your Search</div> : 
          <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
            { products.map((product) => (<MDBCol key={product._id}><Item product={product}></Item></MDBCol>))}
                                          </MDBRow>
            }
    </div> 
    );
  };
  
  export default ItemsGallery;