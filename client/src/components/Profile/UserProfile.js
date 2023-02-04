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
import UserDetails from '../UserDetails/UserDetails';
import { selectUser } from '../../store/selectors/users';
import { fetchUser } from '../../store/middlewares/users';
import axios from '../../utils/axios'


const UserProfile = () => {

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const buys = useSelector(selectBuys);
  const [data, setData] = useState([]);
 

    useEffect(() => {
        dispatch(fetchAllBuys(authCtx.email));
    }, []);

    useEffect(() => {
      buysTodata();
     
    },[]);

    useEffect(() => {
      dispatch(fetchUser(authCtx.email));
      
    },[]);
    
   

    console.log(user);
    console.log(buys);

    const buysTodata = async () => {
      const data=[];
      var b;
      for(b of buys) {
          var result={'WheyProtein':0,'Drinks':0,MilkProtein:0,VeganProtein:0,ProteinBars:0,NutButter:0};
          var p;
          var product;
          for(p of b.products) {
            try {
              let product = await (await axios("/items/"+p.productId)).data;
              let category = product.category.replaceAll(" ","");
              console.log(category);
              result[category] += ((+product.price)* p.quantity); 

            } catch (error) {
              console.log(error);
            }      
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
        { (buys.lenght!=0) &&
        <MDBCol size='6'>
        <Bars data={data}/>
        </MDBCol>
        }
        
        <MDBCol size='6'>
          <UserDetails  user={user} buys={buys}/>
        </MDBCol>

        { (buys.lenght!=0) &&
        <MDBCol size='6'>
          <MyOrders buys={buys}/>
        </MDBCol>
        }
        
      </MDBRow>
      </MDBContainer>
      
      
      
    </section>
  );
};

export default UserProfile ;
