import classes from './Bars.module.css';
import React  from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Bars = () => {

  const catagories = ["Wheyprotein","Drinks","Milkprotein","Veganprotein","Proteinbars","Nutbutter"];
  const data = [
    {
      buyID: '1',
      Milkprotein: 4000,
      Veganprotein: 2400,
      Snacks: 3000,
      Drinks: 2000,
    },
    {
      buyID: '2',
      Milkprotein: 3000,
      Veganprotein: 1398,
    },
    {
      buyID: '3',
      Milkprotein: 2000,
      Veganprotein: 9800,
    },
    {
      buyID: '1',
      Milkprotein: 2780,
      Veganprotein: 3908,
      Proteinbars: 10000
    },
    {
      buyID: '1',
      Milkprotein: 500,
      Veganprotein: 10000,
      Proteinbars: 8000
    },
  ];
  return (
    <div className='d-flex align-items-center justify-content-center  h-100'>
        <h2 className='mb-3'>My history</h2>
    <BarChart
    width={700}
    height={500}
    data={data}
    margin={{
      top: 20,
      right: 10,
      left: 50,
      bottom: 5
    }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    {/* <XAxis dataKey="buyID" /> */}
    <XAxis dataKey="a"/>
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Milkprotein" stackId="a" fill="#BD1D61" />
    <Bar dataKey="Wheyprotein" stackId="a" fill="#1494A1" />
    <Bar dataKey="Veganprotein" stackId="a" fill="#233078" />
    <Bar dataKey="Proteinbars" stackId="a" fill="#727E74" />
    <Bar dataKey="Nutbutter" stackId="a" fill="#A0EAE0" />
    <Bar dataKey="Drinks" stackId="a" fill="pink" />
  </BarChart>

  </div>
  );
};

export default Bars;
