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



const UserProfile = () => {

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const buys = useSelector(selectBuys);
  
    useEffect(() => {
        dispatch(fetchAllBuys(authCtx.email));
        dispatch(fetchUser(authCtx.email)); 
  
        
    }, []);

  return (
    <section className={classes.header}>
      <header className='border-bottom'>
      <h1 className='pb-3 title '>My Account</h1>
          <span className='title-welcome'>Welcome { authCtx.email }</span>
      </header>
      <MDBContainer fluid>
      <MDBRow>
        { (buys.lenght!=0) &&
        <MDBCol size='6'>
        <Bars buys={buys}/>
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
