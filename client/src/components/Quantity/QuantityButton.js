import './QuantityButton.css';
import { useState } from 'react';

const QuantityButton  = ({quantity, onQuantityChange}) => {

    //let [quantity, setQuantity] = useState(1);

    const [isMinusEnabled, setIsMinusEnabled] = useState(quantity>1);

    const onPlusHandler = () => {
        onQuantityChange(quantity + 1);
        setIsMinusEnabled(true);
    }

    const onMinusHandler = () => {
        if (isMinusEnabled) {
            onQuantityChange(quantity - 1);
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
                <div className="col-md-1 text_"><h3>{quantity}</h3></div>
                <button className={isMinusEnabled ? 'button_ col-md-1' : 'button_disabled col-md-1'} onClick={onMinusHandler}><i className="fa-solid fa-minus"></i></button>
            </div>
    );
};

export default QuantityButton;