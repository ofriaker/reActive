import './Product.css';
import Select from 'react-select';
import { useState } from 'react';
import QuantityButton from '../Quantity/QuantityButton';


const Product = () => {
    //needs to get that data from the props
    const imgSrc = "images/product.jpg";
    const productName = "Layered Protein Bar";
    const productDescription = "Same 6 layers, brand new look";
    const price = 7;
    const rating = 4.4;
    const categoty ="Snacks";
    let [quantity, setQuantity] = useState(1);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    
    const onQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    }

    const StarRating = () => {
        return (
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= rating ? "on" : "off"}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
        );
                            
    };

    return (
        <div className="container">
            <div className='row mt-2'>
                <h6>{categoty}  {" > "} {productName} </h6>
             </div>
            <div className='row mt-3'>
                <div className="col-md-6">
                    <img src={imgSrc} alt={productName} height="500" />
                </div>

                <div className="col-md-6">
                    <h1>{productName}</h1>
                    <h4>{productDescription}</h4>
                    <StarRating/>
                    <hr></hr>
                    <h2>{price} $</h2>
                    <hr></hr>
                    <h4>Flavours:</h4>
                    <Select options={options}></Select>
                    <div className="row mt-1">
                        <h2 className='col-md-2 text'>Quantity:</h2>
                        <div className="row mt-1 quantiti_line"></div>
                        <QuantityButton 
                            quantity={quantity}
                            onQuantityChange={onQuantityChange} />
                    </div>
                    <div className='row'>
                        <i className='col-md-4'></i>
                        <button className='col-md-4 to_cart'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;