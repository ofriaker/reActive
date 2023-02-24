import React from 'react';
import { MDBCard,
 MDBCardBody,
MDBCardTitle,
MDBCardText } from 'mdb-react-ui-kit';
 import classes from './UserCount.module.css';

const userCount = ({ count }) => {
    return (
        <section className={classes.cardBox}>
            {(count!=null && count!=undefined ) &&
        <MDBCard className={classes.card}>
            <MDBCardBody className={classes.cardBody}>
                <MDBCardTitle className={classes.cardText}>Users Online
                </MDBCardTitle>
                <MDBCardText className={classes.cardText} >
                    {count}
                    <i className="fa-solid fa-user" style={{ marginLeft: '5px' }}></i>
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        }
        </section>
)}

export default userCount;