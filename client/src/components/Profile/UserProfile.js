import classes from './UserProfile.module.css';
import React, { useContext }  from 'react';
import Bars from '../Bars/Bars';
import AuthContext from '../../store/auth-context';
import { selectBuys } from '../../store/selectors/buys';
import { fetchAllBuys } from '../../store/middlewares/buys';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';
import {
  MDBCol,
 MDBContainer, MDBRow
} from 'mdb-react-ui-kit';


const UserProfile = () => {

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const buys = useSelector(selectBuys);
  const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(fetchAllBuys(authCtx.email));
        console.log(buys);
        buysTodata();
        
    }, []); 

    const buysTodata = async () => {
      const data=[];
      var b;
      for(b of buys) {
          var result={WheyProtein:0,Drinks:0,MilkProtein:0,VeganProtein:0,ProteinBars:0,NutButter:0};
          var p;
          for(p of b.products) {
                  const URL='http://localhost:4000/api/items/'+p.productName;
                  const res = await fetch(URL);
                  var product = await res.json(); 
                  console.log(product);
                  var category = product[0].category.replaceAll(" ","");
                  console.log(category);
                  result[category] += ((+product[0].price) * p.quantity);
          
          } 
          data.push(result);  
      } 
      setData(data);
      console.log(data);
  }


  return (
    <section className={classes.profile}>
      <header className='border-bottom d-flex'>
      <h1 className='pb-3'>My Account</h1>
      <h1>{authCtx.email}</h1>
      </header>
      <MDBContainer fluid>
      <MDBRow>
        <MDBCol size='6'>
          <Bars data={data}/>
        </MDBCol>
        <MDBCol size='6'>
        <MyOrders buys={buys}/>  
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      
      
      
    </section>
  );
};

export default UserProfile ;
