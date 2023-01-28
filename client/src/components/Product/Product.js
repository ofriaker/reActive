import './Product.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
// import QuantityButton from '../Quantity/QuantityButton';
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from '../../store/selectors/cart';
import cart, { setCart } from '../../store/reducers/cart';


const Product = () => {
    const dispatch = useDispatch();
    // const loading = useSelector(isLoading);
    const cartProducts = useSelector(selectCart);

    //needs to get that data from the props
    const imgSrc = "images/product.jpg";
    const productName = "Layered Protein Bar";
    const productDescription = "Same 6 layers, brand new look";
    const price = 7;
    const rating = 4.4;
    const categoty = "Snacks";
    // let [quantity, setQuantity] = useState(1);
    const flavours = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    // const onQuantityChange = (newQuantity) => {
    //     setQuantity(newQuantity);
    // }


    useEffect(() => {
        const productToAdd = { productName, imgSrc, productDescription, price, rating, categoty, flavours };
        console.log(cart);
        dispatch(setCart(cartProducts, [productToAdd]));
        console.log(cart);

    }, []);

    // function AddToCartHandler () {
    //     // make sure to pass the right amont and flavour
    //    console.log(cartProducts);


    //    console.log(cartProducts);
    // }

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
                    <StarRating />
                    <hr></hr>
                    <h2>{price} $</h2>
                    <hr></hr>
                    <h4>Flavours:</h4>
                    <Select options={flavours} value={flavours[0]}></Select>
                    {/* <div className="row mt-1">
                        <h2 className='col-md-2 text'>Quantity:</h2>
                        <div className="row mt-1 quantiti_line"></div>
                        {/* <QuantityButton
                            quantity={quantity}
                            onQuantityChange={onQuantityChange} /> 
                    {/* </div>  
                    */}
                    <div className='row mt-4'>
                        <i className='col-md-4'></i>
                        <button className='col-md-4 to_cart' >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;