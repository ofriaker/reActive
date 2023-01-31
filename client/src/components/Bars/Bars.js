import React  from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Bars = ({data}) => {
    
  return (
    <div>
    <h2 className='align-items-center justify-content-center text-center mt-3'>My history</h2>
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
    <Bar dataKey="MilkProtein" stackId="a" fill="#BD1D61" />
    <Bar dataKey="WheyProtein" stackId="a" fill="#1494A1" />
    <Bar dataKey="VeganProtein" stackId="a" fill="#233078" />
    <Bar dataKey="ProteinbBars" stackId="a" fill="#727E74" />
    <Bar dataKey="NutButter" stackId="a" fill="#A0EAE0" />
    <Bar dataKey="Drinks" stackId="a" fill="pink" />
  </BarChart>

  </div>
  );
};

export default Bars;
