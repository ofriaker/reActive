import classes from './UserProfile.module.css';
import React  from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Bars from '../Bars/Bars';


const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <header className='border-bottom d-flex'>
      <h1 className='pb-3'>My account</h1>
      </header>
      <Bars/>
    </section>
  );
};

export default UserProfile ;
