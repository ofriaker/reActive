import classes from './UserProfile.module.css';
import React, { useContext }  from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Bars from '../Bars/Bars';
import AuthContext from '../../store/auth-context';


const UserProfile = () => {

  const authCtx = useContext(AuthContext);
  return (
    <section className={classes.profile}>
      <header className='border-bottom d-flex'>
      <h1 className='pb-3'>My Account</h1>
      <h1>{authCtx.email}</h1>
      </header>
      <Bars/>
    </section>
  );
};

export default UserProfile ;
