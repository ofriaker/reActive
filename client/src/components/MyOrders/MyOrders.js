import React, { useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';



const MyOrders = ({buys}) => {
   // console.log(buys);
    const count =1;

    return (
        <div className='m-1 p-3' id="myOrders">
            <h2 className='align-items-center justify-content-center text-center mt-1'>My Orders</h2>
            <MDBTable>
            <MDBTableHead>
                <tr>
                <th>#</th>
                <th>Email</th>
                <th>Num of products</th>
                <th>Total price</th>
                </tr>
            </MDBTableHead>
            {buys.length != 0 &&
            <MDBTableBody> 
                {buys.map((buy, count) =>{
                    return(
                        <tr key={count++} >
                        <td>{count++}</td>
                        <td>{buy.userId}</td>
                        <td>{buy.products.length}</td>
                        <td>{buy.totalPrice}</td>
                        </tr>
                    ) 
                })}

            </MDBTableBody>
            }
            </MDBTable>
        </div>
      
    );
  };
  
  export default MyOrders;