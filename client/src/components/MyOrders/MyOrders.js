import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';



const MyOrders = ({buys}) => {
    console.log(buys);

    return (
        <div className=''>
            <h2 className='align-items-center justify-content-center text-center mt-3'>My Orders</h2>
            <MDBTable  scrollY>
            <MDBTableHead>
                <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Total price</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {buys.map((buy) =>{
                    <tr>
                        <td>{buy.userId}</td>
                    </tr>
                })}
            </MDBTableBody>
            </MDBTable>
        </div>
      
    );
  };
  
  export default MyOrders;