import classes from './UserProfile.module.css';
import React, { useContext }  from 'react';
import Bars from '../Bars/Bars';
import AuthContext from '../../store/auth-context';
import { selectBuys } from '../../store/selectors/buys';
import { fetchAllBuys } from '../../store/middlewares/buys';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import UserDetails from '../UserDetails/UserDetails';
import { selectUser } from '../../store/selectors/users';
import { fetchUser } from '../../store/middlewares/users';
import UserCount from '../AdminComponents/UserCount';

const UserProfile = () => {

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const buys = useSelector(selectBuys);
  const [userCount, setUserCount] = useState();
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  useEffect(() => {
      dispatch(fetchAllBuys(authCtx.email));
      dispatch(fetchUser(authCtx.email));
  }, []);

  useEffect(() => {
    if(user.length!=0) {
      if(user[0].isAdmin) {
        //console.log('user is admin');
        setUserIsAdmin(true);
      }
    }
  }, [user]);
    
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4001');
    
    socket.onopen = () => {
    //  console.log('WebSocket connected');

      socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'user-count-update') {
        //  console.log('Received user count update:', data.userCount);
          setUserCount(data.userCount);
        }
        
      });

    };

     return () => {
       socket.close();
     };

  }, []);

  return (
    <section className={classes.header}>
      <div className='border-bottom'>
        <header>
          <h1 className='pb-3 title '>My Account</h1>
            <span className='title-welcome'>Welcome { authCtx.email }</span>
        </header>
      </div>
      <MDBContainer fluid>
      <MDBRow className="align-items-baseline">
        { (buys.lenght!=0) &&
        <MDBCol size='6'>
        <Bars buys={buys}/>
        </MDBCol>
        }
        
        <MDBCol  className={classes.colRight} size='6'>
          <UserDetails  user={user} buys={buys}/>
        </MDBCol>
        </MDBRow>

        <MDBRow className="align-items-baseline mt-5">
        { (buys.length!=0) &&
        <MDBCol size='7'>
          <MyOrders buys={buys}/>
        </MDBCol>
        }
        
        {(userIsAdmin) && <MDBCol  className={classes.colRight} size='4' >
            <UserCount count={userCount} />
           </MDBCol>
        }
        
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default UserProfile ;