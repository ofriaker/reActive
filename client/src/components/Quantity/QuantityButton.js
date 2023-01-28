import './QuantityButton.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isLoading, selectCart } from '../../store/selectors/cart';
import { setCart, incQuantity, decQuantity } from '../../store/reducers/cart';

const QuantityButton  = ({cartItem, index}) => {

    const dispatch = useDispatch();
    let [quantity, setQuantity] = useState(cartItem.quantity);
        const cart = useSelector(selectCart);


    const [isMinusEnabled, setIsMinusEnabled] = useState(quantity>1);

    const onPlusHandler = () => {
        setIsMinusEnabled(true);
        dispatch(incQuantity(index));
    }

    const onMinusHandler = () => {
        if (isMinusEnabled) {
            dispatch(decQuantity(index));
            if (quantity == 2) {
                console.log(quantity, isMinusEnabled);
                setIsMinusEnabled(false);
                console.log(quantity, isMinusEnabled);
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