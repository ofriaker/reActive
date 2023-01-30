import Item from "../Item/Item";
import ItemsGallry from "../ItemsGallery/ItemsGallery";
import classes from './Catagory.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SortBy from "../SortBy/SortBy";


const Catagory = () => {

    const {id} = useParams();

    const [sortBy, setSortBy] = useState({});

    return (
        <div>
            <SortBy setSortBy={setSortBy}></SortBy>
            <h1 className={classes.title}>{id}</h1>
            <hr></hr>
            <ItemsGallry catagory={id} sortBy={sortBy}></ItemsGallry>
        </div>
      
    );
  };
  
  export default Catagory;