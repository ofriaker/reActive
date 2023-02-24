import './QuantityButton.css';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { incQuantity, decQuantity } from '../../store/reducers/cart';


const QuantityButton  = ({cartItem, index}) => {

    const dispatch = useDispatch();
    let [quantity, setQuantity] = useState(cartItem.quantity)
    
    useEffect(() => {
        setQuantity(cartItem.quantity);
    })


    const [isMinusEnabled, setIsMinusEnabled] = useState(quantity>1);

    const onPlusHandler = () => {
        setIsMinusEnabled(true);
        dispatch(incQuantity(index));
    }

    const onMinusHandler = () => {
        // console.log(quantity);
        if (isMinusEnabled) {
            dispatch(decQuantity(index));
            if (quantity === 2) {
                setIsMinusEnabled(false);
            }
        }
    }

    return (
            <div className='row mt-1 box_'>
                <button className="button_ col-md-1" onClick={onPlusHandler}><i className="fa-solid fa-plus"></i></button>
            <div className="col-md-1"><h3 className='textQ'>{cartItem.quantity}</h3></div>
                <button className={isMinusEnabled ? 'button_ col-md-1' : 'button_disabled col-md-1'} onClick={onMinusHandler}><i className="fa-solid fa-minus"></i></button>
            </div>
    );
};

export default QuantityButton;