import classes from './Bars.module.css';
import React  from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AuthContext from '../../store/auth-context';
import { useState , useContext, useEffect } from 'react';
import { selectBuys } from '../../store/selectors/buys';
import { fetchAllBuys } from '../../store/middlewares/buys';
import { useDispatch, useSelector } from 'react-redux';

const Bars = () => {

  const authCtx = useContext(AuthContext);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const buys = useSelector(selectBuys);

    useEffect(() => {
        dispatch(fetchAllBuys(authCtx.email));
        console.log(buys);
        buysTodata();
    }, []); 

    const buysTodata = async () => {
        const data=[];
        var b;
        for(b of buys) {
            var result={WheyProtein:0,Drinks:0,MilkProtein:0,VeganProtein:0,ProteinBars:0,NutButter:0};
            var p;
            for(p of b.products) {
                    const URL='http://localhost:4000/api/items/'+p.productName;
                    const res = await fetch(URL);
                    var product = await res.json(); 
                    console.log(product);
                    var category = product[0].category.replaceAll(" ","");
                    console.log(category);
                    result[category] += ((+product[0].price) * p.quantity);
            
            } 
            data.push(result);  
        } 
        setData(data);
        console.log(data);
    }
  const catagories = ["WheyProtein","Drinks","MilkProtein","VeganProtein","ProteinBars","NutButter"];

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
