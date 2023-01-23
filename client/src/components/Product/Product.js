import classes from './Product.css';
import Select from 'react-select';
import { useState } from 'react';

const Product = () => {
    const imgSrc = "images/product.jpg";
    const productName = "Layered Protein Bar";
    const price = 7;
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
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
        <div className="container">
            <div className='row mt-2'>
                <div className="col-md-5">
                    <img src={imgSrc} alt="product" height="400" />
                </div>

                <div className="col-md-6">
                    <h1>{productName}</h1>
                    <hr></hr>
                    <h2>{price} $</h2>
                    <hr></hr>
                    <h4>Flavours:</h4>
                    <Select options={options}></Select>
                    <div className="row mt-1">
                        <h2>Quantity:</h2>
                        <div className="row mt-1 quantiti_line">
                            <div className='row mt-1'>
                                <div className='button_ button_plus' onClick={onPlusHandler}></div>
                                <div className="col-md-1"><h3>{quantity}</h3></div>
                                <div className={isMinusEnabled ? 'button_' : 'button_disabled'} onClick={onMinusHandler}></div>
                                <div className='col-md-2'></div>
                                <div className='col-md-4'>
                                    <button className='to_cart'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//change plzzz

export default Product;