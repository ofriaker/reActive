import React  from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from '../../utils/axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Bars = ({buys}) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if(buys.lenght!=0) {
      buysTodata();
    }
   
   
  },[data]);

  const buysTodata = async () => {
    const data=[];
    var b;
    for(b of buys) {
        var result={WheyProtein:0,Drinks:0,MilkProtein:0,VeganProtein:0,ProteinBars:0,NutButter:0};
        var p;
        for(p of b.products) {
          try {
            let product = await (await axios("/items/"+p.productId)).data;
            let category = product.category.replaceAll(" ","");
            result[category] += ((+product.price)* p.quantity); 

          } catch (error) {
            console.log(error);
          }      
        } 
        data.push(result);  
    } 
    setData(data);
}
    
  return (
    (data.lenght!=0) && (
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
  ));
};

export default Bars;
