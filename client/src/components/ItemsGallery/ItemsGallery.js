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

const ItemsGallry = () => {
    return (
    <div className='container'>
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        <MDBCol>
            <Item></Item>
        </MDBCol>
        <MDBCol>
            <Item></Item>
        </MDBCol>
        <MDBCol>
            <Item></Item>
        </MDBCol>
        <MDBCol>
            <Item></Item>
        </MDBCol>
        <MDBCol>
            <Item></Item>
        </MDBCol>
        <MDBCol>
            <Item></Item>
        </MDBCol>
        <MDBCol>
            <Item></Item>
        </MDBCol>
        <MDBCol>
            <Item></Item>
        </MDBCol>
      </MDBRow>
    </div>
      
    );
  };
  
  export default ItemsGallry;