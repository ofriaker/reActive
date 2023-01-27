import Item from "../Item/Item";
import ItemsGallry from "../ItemsGallery/ItemsGallery";
import classes from './Catagory.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Catagory = () => {

    const {id} = useParams();


    return (
        <div>
            <h1 className={classes.title}>{id}</h1>
            <hr></hr>
            <ItemsGallry catagory={id}></ItemsGallry>
        </div>
      
    );
  };
  
  export default Catagory;