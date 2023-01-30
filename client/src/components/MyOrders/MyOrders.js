import React, { useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';



const MyOrders = ({buys}) => {
    console.log(buys);
    const count =1;

    return (
        <div className='m-5 p-3' id="myOrders">
            <h2 className='align-items-center justify-content-center text-center mt-3'>My Orders</h2>
            <MDBTable>
            <MDBTableHead>
                <tr>
                <th>#</th>
                <th>Email</th>
                <th>Num of products</th>
                <th>Total price</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody> 
                {buys.map((buy, count) =>{
                    return(
                        <tr>
                        <td>{count++}</td>
                        <td>{buy.userId}</td>
                        <td>{buy.products.length}</td>
                        <td>{buy.totalPrice}</td>
                        </tr>
                    ) 
                })}

            </MDBTableBody>
            </MDBTable>
        </div>
      
    );
  };
  
  export default MyOrders;