import './Product.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
// import QuantityButton from '../Quantity/QuantityButton';
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from '../../store/selectors/cart';
import cart, { setCart } from '../../store/reducers/cart';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



const Product = () => {
    const location = useLocation();
    const item = location.state;
    let flavours = new Array(...item.flavours);
    const newF = [];
    let chosenFlavour = flavours[0];

    flavours.forEach(f => {
        newF.push({ value: f, label: f });
    })

    let itemToCart = item;
    itemToCart.flavours = chosenFlavour;
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCart);
    // dispatch to cart!!



    const StarRating = () => {
        return (
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= item.rate ? "on" : "off"}
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
                <h6>{item.category}  {" > "} {item.name} </h6>
            </div>
            <div className='row mt-3'>
                <div className="col-md-6">
                    <img src={item.imgUrl} alt={item.name} height="500" />
                </div>

                <div className="col-md-6">
                    <h1>{item.name}</h1>
                    <h4>{item.desctiption}</h4>
                    <StarRating />
                    <hr></hr>
                    <h2>{item.price}  ₪</h2>
                    <hr></hr>
                    <h4>Flavours:</h4>
                    <Select options={newF} defaultValue={newF[0]} onChange={(f) => { chosenFlavour = f.value }}></Select>
                    <Link to='/cart'>
                        <div className='row mt-4'>
                            <i className='col-md-4'></i>
                            <button className='col-md-4 to_cart' >Add to cart</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;