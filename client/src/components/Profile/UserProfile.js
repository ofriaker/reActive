import classes from './UserProfile.module.css';
import React, { useContext, Link}  from 'react';
import Bars from '../Bars/Bars';
import AuthContext from '../../store/auth-context';
import { selectBuys } from '../../store/selectors/buys';
import { fetchAllBuys } from '../../store/middlewares/buys';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import UserDetails from '../UserDetails/UserDetails';
import { selectUser } from '../../store/selectors/users';
import { fetchUser } from '../../store/middlewares/users';
import UserCount from '../AdminComponents/UserCount';
import { useNavigate } from "react-router-dom";


const UserProfile = (props) => {

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const buys = useSelector(selectBuys);
  const [userCount, setUserCount] = useState();
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [webSocket, setWebSocket] = useState(null);

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

    if (webSocket == null) {
      const newWebSocket = new WebSocket('ws://localhost:4001');
      setWebSocket(newWebSocket);
      //console.log('new websocket created');
    } 
  }, []);

  useEffect(() => {

    if (webSocket != null) {
      webSocket.onopen = () => {
          //console.log('WebSocket connected');
    
        webSocket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'user-count-update') {
              //console.log('Received user count update:', data.userCount);
              setUserCount(data.userCount);
            }
            
          });
      }
    }

  }, [webSocket]);

  const handleLogout = () => {
    webSocket?.send(JSON.stringify({ type: 'user-logged-out' }));
    webSocket?.close();
    authCtx.logout();
    navigate("/"); 
  };

  return (
    <section className={classes.header}>
      <div className='border-bottom'>
        <header>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
             <MDBBtn style={{ position: "absolute", right: '10%', backgroundColor:"#008190"}} className='mt-2' onClick={handleLogout}>Logout</MDBBtn>
            </div>
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