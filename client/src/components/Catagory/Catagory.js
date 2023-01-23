import Item from "../Item/Item";
import ItemsGallry from "../ItemsGallery/ItemsGallery";
import classes from './Catagory.module.css';

const Catagory = () => {
    return (
        <div>
            <h1 className={classes.title}>This is catagory page</h1>
            <hr></hr>
            <ItemsGallry></ItemsGallry>
        </div>
      
    );
  };
  
  export default Catagory;