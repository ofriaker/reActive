import './Cart.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItem from './CartItem';
import { isLoading, selectCart } from '../../store/selectors/cart';

const calculateTotalPrice = (Items) => {
    let prices = Items.map(item => item.price * item.quantity);
    let sum = prices.reduce((a, b) => a + b, 0);
    return sum;
}

const Cart = () => {
    const dispatch = useDispatch();
    let [totalPrice, setTotalPrice] = useState(0);
    const loading = useSelector(isLoading);
    const cart = useSelector(selectCart);
    let cartItemsComponents = [];


    useEffect(() => {
        setTotalPrice(calculateTotalPrice(cart));
    });

    if (cart) {
        cart.forEach((item, index) => {
            cartItemsComponents.push(<CartItem 
                item={item} index={index}></CartItem>);
        });
    }

    return (
        <div className="container">
            <div className='row mt-2'>
                <h2>Your Shopping Cart </h2>
            </div>
            <div className="row mt-2">
                <h4 className="col-md-8 text">Items</h4>
                <h4 className="col-md-2 text">Quantity</h4>
                <h4 className="col-md-2 text">Price</h4>
                <hr></hr>
            </div>
            <div>
                {cartItemsComponents}
            </div>

            <div className="row">
                <div className="col-md-8"></div>

                <div className="col-md-3 total">
                    <div className='row mt-2'>
                        <h4 className='col-md-8'>Cart Total:</h4>
                        <h4 className='col-md-4'>{totalPrice}₪</h4>
                    </div>
                    <div className='row mt-2'>
                        <i className='col-md-6'></i>
                        <button className='col-md-5 button'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;