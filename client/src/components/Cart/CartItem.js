import './CartItem.css';
import { useEffect, useState } from 'react';
import QuantityButton from '../Quantity/QuantityButton';

const CartItem = (props) => {
    const [itemPrice, setItemPrice] = useState(props.quantity*props.price);
    let [quantity, setQuantity] = useState(props.quantity);

    const onQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    }


    useEffect(() => {
        setItemPrice(props.price * quantity);
    }); 

    return (
        <div className="">
            <div className="row mt-2">
                <div className='col-md-2'>
                    <img className="smallImg" src={props.imgUrl} alt=""></img>
                </div>
                <div className='col-md-6'>
                    <div className='row mt-1'>
                        <h3 >{props.name}</h3>
                        <h5>flavour: {props.flavour}</h5>
                    </div>
                </div>
                <div className='col-md-2 text'>
                    <QuantityButton 
                        quantity={quantity}
                        onQuantityChange={onQuantityChange}/>
                </div>
                {/* <h4 className="col-md-2 text">{props.quantity}</h4> */}
                <div className='col-md-2'>
                    <div className='row'>
                        <h4 className=" col-md-6 text">{itemPrice}$</h4>
                        <button className="cancelBTn col-md-6">
                            <i class="fa-solid fa-xmark"></i>                        
                        </button>
                    </div>
                </div>    
            </div>
            <hr></hr>
        </div>
    );
}

export default CartItem;