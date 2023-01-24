import './QuantityButton.css';
import { useState } from 'react';

const QuantityButton  = () => {

    let [quantity, setQuantity] = useState(1);
    const [isMinusEnabled, setIsMinusEnabled] = useState(false);

    const onPlusHandler = () => {
        setQuantity(quantity + 1);
        setIsMinusEnabled(true);
    }

    const onMinusHandler = () => {
        if (isMinusEnabled) {
            setQuantity(quantity - 1);
            if (quantity == 2) {
                console.log(quantity, isMinusEnabled);
                setIsMinusEnabled(false);
                console.log(quantity, isMinusEnabled);
            }
        }
    }

    return (
            <div className='row mt-1'>
                <button className="button_ col-md-1" onClick={onPlusHandler}><i className="fa-solid fa-plus"></i></button>
                <div className="col-md-1 text"><h3>{quantity}</h3></div>
                <button className={isMinusEnabled ? 'button_ col-md-1' : 'button_disabled col-md-1'} onClick={onMinusHandler}><i className="fa-solid fa-minus"></i></button>
            </div>
    );
};

export default QuantityButton;